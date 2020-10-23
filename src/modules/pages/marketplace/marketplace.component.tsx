import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
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
  const { categories, slider, authorized, user } = useMarketplaceData();
  const dispatch = useDispatch();

  return (
    <div className={styles.marketplace}>
      <Preloader id={Preloaders.marketplace}>
        <Hero categories={categories} slider={slider} />

        <div className={styles.content}>
          {categories?.map(({ category: { category, id }, items }) => {
            const isNotEmpty = items.length > 0;

            return (
              isNotEmpty && (
                <Section
                  id={id}
                  className={styles.section}
                  caption={category}
                  description='New items in'
                  data={items}
                  key={id}
                />
              )
            );
          })}
        </div>
      </Preloader>
    </div>
  );
};

export { Marketplace };
