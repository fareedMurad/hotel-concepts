import * as React from 'react';
import { MarketplaceProps } from './marketplace.props';
import * as styles from './marketplace.scss';
import {
  H1,
  ButtonFilter,
  Footer,
  H2,
  PreCaption,
  Spinner
} from '@core/components';
import { useMarketplaceData } from './hooks/marketplace.hook';
import { ProductsSlider } from '@pages/components/products-slider';
import { MarketplaceHero } from './marketplace-hero';
import { useProductsCategoriesData } from './hooks/marketplace-categories.hook';
import { MarketplaceProductsCarusel } from './marketplace-products-carusel';

/**
 * Renders Marketplace
 */
const Marketplace: React.FC<MarketplaceProps> = ({}) => {
  const {
    productCategories,
    productCategoriesLoading
  } = useProductsCategoriesData();

  if (productCategoriesLoading) return <Spinner />;

  return (
    <div className={styles.marketplace}>
      <MarketplaceHero />

      {productCategories.map(el => {
        return (
          <React.Fragment key={el.sys.id}>
            <div className={styles.itemsContainer} id={el.category}>
              <PreCaption>Popular items in</PreCaption>
              <H2 className={styles.title}>{el.category}</H2>
            </div>
            <MarketplaceProductsCarusel category={el.category} />
          </React.Fragment>
        );
      })}
      {/* <Footer /> */}
    </div>
  );
};

export { Marketplace };
