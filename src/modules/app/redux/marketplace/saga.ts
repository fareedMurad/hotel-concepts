import { ContentType } from '@account/pages/library/models';
import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Payload, Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { Context } from '../context';
import {
  fetchMarketplaceByCategory,
  fetchMarketplace,
  fetchMarketplaceList,
  fetchMarketplaceProduct
} from './actions';

/**
 * marketplace saga
 */
class MarketplaceSaga {
  /**
   * Fetch marketplace list
   */
  @Saga(fetchMarketplaceList)
  public *fetchMarketplaceList(
    payload: Payload<typeof fetchMarketplaceList>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.marketplace));

    try {
      const response = yield call(api.marketplace.fetchMarketplaceList, {
        skip: 0,
        limit: 1,
        category: payload,
        locale: 'en-US'
      });

      yield put(fetchMarketplaceList.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.marketplace));
    }
  }

  /**
   * Fetch marketplace categories
   */
  @Saga(fetchMarketplace)
  public *fetchMarketplace(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.marketplace));

    try {
      const response = yield call(api.marketplace.fetchMarketplace, 'en-US');

      yield put(fetchMarketplace.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.marketplace));
    }
  }

  /**
   * Fetch marketplace products by category id
   */
  @Saga(fetchMarketplaceByCategory)
  public *fetchMarketplaceByCategory(
    payload: Payload<typeof fetchMarketplaceByCategory>,
    { api }: Context
  ) {
    // yield put(preloaderStart(Preloaders.marketplace));

    try {
      const response = yield call(
        api.marketplace.fetchMarketplaceByCategory,
        payload,
        'en-US'
      );

      yield put(fetchMarketplaceByCategory.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      // yield put(preloaderStop(Preloaders.marketplace));
    }
  }

  /**
   * Fetch marketplace product
   */
  @Saga(fetchMarketplaceProduct)
  public *fetchMarketplaceProduct(
    id: Payload<typeof fetchMarketplaceProduct>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.marketplaceProduct));

    try {
      const response = yield call(api.marketplace.fetchMarketplaceProduct, {
        id,
        locale: 'en-US',
        type: ContentType.product
      });

      yield put(fetchMarketplaceProduct.success(response.data));
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.marketplaceProduct));
    }
  }
}

export { MarketplaceSaga };
