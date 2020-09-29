import {
  fetchMarketplaceList,
  fetchMarketplaceProduct
} from '@app/redux/marketplace';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Hero, Section } from './components';
import { useMarketplaceData } from './marketplace.hook';
import * as styles from './marketplace.scss';

/**
 * Renders Marketplace
 */
const Marketplace: React.FC = () => {
  const { t } = useTranslation();
  const { categories, products } = useMarketplaceData();
  const dispatch = useDispatch();

  console.log(products);

  return (
    <div className={styles.marketplace}>
      <Hero categories={categories} />

      <div className={styles.content}>
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

        <Section
          className={styles.section}
          caption='Web templates'
          description='Popular items in'
          data={[]}
        />

        <Section
          className={styles.section}
          caption='Books'
          description='New items in'
          data={[]}
        />
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
