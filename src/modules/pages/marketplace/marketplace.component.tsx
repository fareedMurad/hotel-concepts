import {
  fetchMarketplaceByCategory,
  fetchMarketplaceCategories,
  fetchMarketplaceList,
  fetchMarketplaceProduct
} from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { H2, PreCaption, Spinner } from '@core/components';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useProductsCategoriesData } from './hooks/marketplace-categories.hook';
import { useMarketplaceData } from './hooks/marketplace.hook';
import { MarketplaceHero } from './marketplace-hero';
import { MarketplaceProductsCarusel } from './marketplace-products-carusel';
import * as styles from './marketplace.scss';

/**
 * Renders Marketplace
 */
const Marketplace: React.FC = () => {
  const { t } = useTranslation();
  const {} = useMarketplaceData();
  const { language } = useSelector((state: State) => state.localization);
  // const {
  //   productCategories,
  //   productCategoriesLoading
  // } = useProductsCategoriesData(language);
  const dispatch = useDispatch();

  // if (productCategoriesLoading) return <Spinner />;

  return (
    <div className={styles.marketplace}>
      <MarketplaceHero />

      <div onClick={() => dispatch(fetchMarketplaceList())}>
        FETCH marketplace list
      </div>

      <div
        onClick={() =>
          dispatch(
            fetchMarketplaceProduct({
              id: '5Dsy1yu5LxX2iwM9PB5AeL',
              category: '2DY13tWbxfrsFsOvTUyBfa'
            })
          )
        }
      >
        FETCH product
      </div>

      <div onClick={() => dispatch(fetchMarketplaceCategories())}>
        FETCH Categories
      </div>

      <div
        onClick={() =>
          dispatch(fetchMarketplaceByCategory('2DY13tWbxfrsFsOvTUyBfa'))
        }
      >
        FETCH By Category
      </div>

      {/* {productCategories.map(el => (
        <React.Fragment key={el.sys.id}>
          <div className={styles.itemsContainer} id={el.category}>
            <PreCaption>{t('marketplace.popular-items')}</PreCaption>
            <H2 className={styles.title}>{el.category}</H2>
          </div>
          <MarketplaceProductsCarusel category={el.category} />
        </React.Fragment>
      ))} */}
      {/* <Footer /> */}
    </div>
  );
};

export { Marketplace };
