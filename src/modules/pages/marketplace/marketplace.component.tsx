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
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';

/**
 * Renders Marketplace
 */
const Marketplace: React.FC<MarketplaceProps> = ({}) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const {
    productCategories,
    productCategoriesLoading
  } = useProductsCategoriesData(language);

  if (productCategoriesLoading) return <Spinner />;

  return (
    <div className={styles.marketplace}>
      <MarketplaceHero />

      {productCategories.map(el => {
        return (
          <React.Fragment key={el.sys.id}>
            <div className={styles.itemsContainer} id={el.category}>
              <PreCaption>{t('marketplace.popular-items')}</PreCaption>
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
