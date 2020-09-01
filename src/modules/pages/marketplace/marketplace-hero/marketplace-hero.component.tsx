import * as React from 'react';
import { IntroProps } from './marketplace-hero.props';
import * as styles from './marketplace-hero.scss';
import { H1, Spinner } from '@core/components';
import { useMarketplaceData } from '../hooks/marketplace.hook';
import classNames from 'classnames';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useProductsCategoriesData } from '../hooks/marketplace-categories.hook';
import { useTranslation } from 'react-i18next';

// todo fix counter!!

/**
 * Renders Intro
 */
const MarketplaceHero: React.FC<IntroProps> = ({}) => {
  const [isActive, setIsActive] = React.useState(null);
  const { marketPlaceHeroImage } = useMarketplaceData();
  const { t } = useTranslation();
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
          <H1 className={styles.wrapperCaption}>{t('marketplace.title')}</H1>
          <div className={styles.wrapperDescription}>
            {t('marketplace.description')}
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
