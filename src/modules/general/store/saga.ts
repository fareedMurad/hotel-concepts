import { SocketResponseType } from '@app/models/enum';
// import { checkCart } from '@app/redux/cart';
import { Context } from '@app/redux/context';
import { SocketService } from '@app/services';
import { enviroment } from '@env';
import { setupLocalization } from '@localization/store';
import { toggleToast } from '@ui/toast';
import { Payload, Saga } from 'redux-chill';
import { eventChannel } from 'redux-saga';
import { all, put, spawn, take } from 'redux-saga/effects';
import socketIOClient from 'socket.io-client';
import { connectSocket, handleError, startup } from './actions';

/**
 * General app methods
 */
class GeneralSaga {
  /**
   * Init all pre-start actions
   */
  @Saga(startup)
  public *startup() {
    // yield put(checkCart());
    yield spawn(this.run);

    // yield put(getUser());
    yield put(setupLocalization('en-US'));
  }

  /**
   * Handle error
   */
  @Saga(handleError)
  public *handleError(message: Payload<typeof handleError>) {
    const description = Array.isArray(message) ? message.join(',') : message;

    yield put(
      toggleToast({
        status: 'fail',
        description
      })
    );
  }

  /**
   * Run app
   */
  public *run() {
    // const { authorized } = yield select((state: State) => state.auth);

    yield all([
      take(setupLocalization.success)
      // take(checkCart.success)
    ]);

    yield put(startup.success());
    // yield put(connectSocket());
  }

  /**
   * Connect to WS
   */
  @Saga(connectSocket)
  public *connect(_, context: Context) {
    const channel = eventChannel(emit => {
      const socket: any =
        context.socket && context.socket.client.connected
          ? context.socket.client
          : socketIOClient(enviroment.socketUrl, {
              transports: ['websocket']
            });
      /**
       * Listen to events
       */
      socket.on('message', (data: any) => {
        emit({ ...data, type: SocketResponseType.checkout });
      });
      socket.on('connect', () => {
        context.socket = new SocketService(socket);
      });
      socket.on('disconnect', () => {});
      socket.on('exception', (data: any) => {
        console.error('exc', data);
      });
      return () => {
        channel.close();
      };
    });

    try {
      const types = {
        // [SocketResponseType.checkout]: receiveMessage.message
      };

      while (true) {
        const response = yield take(channel);
        const { type } = response;
        if (!type) return;

        const handle = types[type];
        if (handle) {
          yield put(handle(response));
        }
      }
    } catch (error) {
      console.log('CHANNEL CLOSED', error);
    }
  }
}

export { GeneralSaga };
