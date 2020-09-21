import * as React from 'react';
import { HeroProps } from './hero.props';
import * as styles from './hero.scss';
import { useMarketplaceData } from '@pages/marketplace/hooks/marketplace.hook';
import { H1 } from '@core/components';

/**
 * Renders Hero
 */
const Hero: React.FC<HeroProps> = ({ title }) => {
  const { marketPlaceHeroImage } = useMarketplaceData();
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${require('src/assets/img/my-account-hero.png')})`
      }}
    >
      <H1 className={styles.title}>{title}</H1>
    </div>
  );
};

export { Hero };
