import { SubscriptionModel } from '@account/pages/subscription/models';
import { Context } from '@app/redux/context';
import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Payload, Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { buySubscripton, fetchSubscription } from './actions';

/**
 * Mocked subscription
 */
const subscription: SubscriptionModel = {
  time: {
    period: '3 months',
    expires: '01.01.2021'
  },
  benefits: [
    {
      caption: 'Guidelines',
      description: 'Guidelines description'
    },
    {
      caption: 'Digital tools',
      description: 'Digital tools description'
    },
    {
      caption: 'Infographics',
      description: 'Infographics description'
    },
    {
      caption: 'Interactive books',
      description: 'Interactive books description'
    }
  ]
};

/**
 * subscription saga
 */
class SubscriptionSaga {
  /**
   * Fetch subscription
   */
  @Saga(fetchSubscription)
  public *fetchSubscription(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.subscription));
    try {
      //   const response = yield call(api.subscription.fetchSubscription);

      //   yield put(fetchSubscription.success(response.data));

      yield put(fetchSubscription.success(subscription));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.subscription));
    }
  }

  //TODO
  /**
   * Buy subscription
   */
  @Saga(buySubscripton)
  public *buySubscripton(
    payload: Payload<typeof buySubscripton>,
    { api }: Context
  ) {
    try {
      const response = yield call(api.subscription.buySubscription, payload);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    }
  }
}

export { SubscriptionSaga };
