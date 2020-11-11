import * as React from 'react';
import * as styles from './marketplace.scss';
import { CookieBanner, Hero } from './components';
import { Faq, KordieDifference, Products, Reading } from './sections';
import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import { useMarketplaceData } from './marketplace.hook';
import { useTranslation } from 'react-i18next';

/**
 * Renders Marketplace
 */
const Marketplace: React.FC = () => {
  const { t } = useTranslation();
  const {
    categories,
    slider,
    authorized,
    user,
    isCookieBanner
  } = useMarketplaceData();

  return (
    <div className={styles.marketplace}>
      {isCookieBanner && <CookieBanner />}
      <Preloader cover id={Preloaders.marketplace}>
        <Hero categories={categories} slider={slider} />
        <Products categories={categories} />
        <KordieDifference />
        <Reading />
        <Faq />
      </Preloader>
    </div>
  );
};

export { Marketplace };
