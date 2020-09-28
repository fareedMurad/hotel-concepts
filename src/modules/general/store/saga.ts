import { setupLocalization } from '@localization/store';
import { Saga, Payload } from 'redux-chill';
import { put, spawn, take } from 'redux-saga/effects';
import { startup, handleError, connectSocket } from './actions';
import { toggleToast } from '@ui/toast';
import { SocketResponseType } from '@app/models/enum';
import { Context } from '@app/redux/context';
import { eventChannel } from 'redux-saga';
import { SocketService } from '@app/services';
import socketIOClient from 'socket.io-client';
import { enviroment } from '@env';

/**
 * General app methods
 */
class GeneralSaga {
  /**
   * Init all pre-start actions
   */
  @Saga(startup)
  public *startup() {
    yield spawn(this.run);

    yield put(setupLocalization('en-US'));

    yield take(setupLocalization.success);
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
