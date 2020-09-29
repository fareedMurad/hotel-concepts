import { ContentType } from '@account/pages/library/models';
import { handleError } from '@general/store';
import { Preloaders } from '@ui/models';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Payload, Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { Context } from '../context';
import {
  fetchMarketplaceByCategory,
  fetchMarketplaceCategories,
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
  public *fetchMarketplaceList(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.marketplace));

    try {
      const response = yield call(api.marketplace.fetchMarketplaceList, {
        skip: 0,
        limit: 1,
        category: '2DY13tWbxfrsFsOvTUyBfa',
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
  @Saga(fetchMarketplaceCategories)
  public *fetchMarketplaceCategories(_, { api }: Context) {
    yield put(preloaderStart(Preloaders.marketplace));

    try {
      const response = yield call(
        api.marketplace.fetchMarketplaceCategories,
        'en-US'
      );

      yield put(fetchMarketplaceCategories.success(response.data));
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
    yield put(preloaderStart(Preloaders.marketplace));

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
      yield put(preloaderStop(Preloaders.marketplace));
    }
  }

  /**
   * Fetch marketplace product
   */
  @Saga(fetchMarketplaceProduct)
  public *fetchMarketplaceProduct(
    { id, category }: Payload<typeof fetchMarketplaceProduct>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.marketplace));

    try {
      const response = yield call(api.marketplace.fetchMarketplaceProduct, {
        id,
        category,
        locale: 'en-US',
        type: ContentType.product
      });

      console.log(response);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.marketplace));
    }
  }
}

export { MarketplaceSaga };
