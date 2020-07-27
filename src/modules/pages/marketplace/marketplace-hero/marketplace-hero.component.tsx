import * as React from 'react';
import { IntroProps } from './marketplace-hero.props';
import * as styles from './marketplace-hero.scss';
import { H1, Spinner } from '@core/components';
import { useMarketplaceData } from '../hooks/marketplace.hook';
import classNames from 'classnames';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useProductsCategoriesData } from '../hooks/marketplace-categories.hook';

// todo fix counter!!

/**
 * Renders Intro
 */
const MarketplaceHero: React.FC<IntroProps> = ({}) => {
  const [isActive, setIsActive] = React.useState(null);
  const { maketplaceFiltersData, marketPlaceHeroImage } = useMarketplaceData();
  const {
    productCategories,
    productCategoriesLoading
  } = useProductsCategoriesData();
  const ScrollToEnroll = to => {
    scrollTo(to);
  };

  if (productCategoriesLoading) return <Spinner />;

  return (
    <div className={styles.intro}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${marketPlaceHeroImage})`
        }}
      >
        <main className={styles.wrapperContent}>
          <H1 className={styles.wrapperCaption}>Marketplace</H1>
          <div className={styles.wrapperDescription}>
            Marketplace is for busy hospitality managers looking <br /> for
            smart answers to common challenges.
          </div>
        </main>
        <div className={styles.filtersField}>
          {productCategories.map(el => {
            const {
              category,
              sys: { id },
              linkedFrom: {
                productCollection: { total: amountOfProducts }
              }
            } = el;

            return (
              <div
                key={id}
                className={classNames(styles.marketplaceFilter, {
                  [styles.active]: isActive === id
                })}
                onClick={() => {
                  ScrollToEnroll(category);
                  setIsActive(id);
                }}
              >
                <div className={styles.marketplaceFilterTitle}>{category}</div>
                <div
                  className={styles.marketplaceFilterQuantity}
                >{`(${amountOfProducts})`}</div>{' '}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { MarketplaceHero };
