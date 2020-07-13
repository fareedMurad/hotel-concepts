import * as React from 'react';
import { IntroProps } from './intro.props';
import * as styles from './intro.scss';
import { H1, ButtonFilter } from '@core/components';
import { useMarketplaceData } from '../marketplace.hook';
import classNames from 'classnames';

/**
 * Renders Intro
 */
const Intro: React.FC<IntroProps> = ({}) => {
  const [isActive, setIsActive] = React.useState(null);
  const { maketplaceFiltersData } = useMarketplaceData();
  return (
    <div className={styles.intro}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${require('img/marketplace-bg.png')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
          {maketplaceFiltersData.map(el => {
            const { title, id, count, anchor } = el;

            return (
              <a
                key={id}
                href={`#${anchor}`}
                className={classNames(styles.marketplaceFilter, {
                  [styles.active]: isActive === id
                })}
                onClick={() => setIsActive(id)}
              >
                <div className={styles.marketplaceFilterTitle}>{title}</div>
                <div
                  className={styles.marketplaceFilterQuantity}
                >{`(${count})`}</div>{' '}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Intro };
