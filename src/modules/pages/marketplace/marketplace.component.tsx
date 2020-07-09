import * as React from 'react';
import { MarketplaceProps } from './marketplace.props';
import * as styles from './marketplace.scss';
import { Header } from '@core/components/header';
import { H1, ButtonFilter, Footer } from '@core/components';
import { useMarketplaceData } from './marketplace.hook';
import { Slider } from '@pages/components/slider';

/**
 * Renders Marketplace
 */
const Marketplace: React.FC<MarketplaceProps> = ({}) => {
  const { goodsData, maketplaceFiltersData, books } = useMarketplaceData();
  const [isActive, setIsActive] = React.useState(null);
  return (
    <div className={styles.marketplace}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${require('img/marketplace-bg.png')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Header />
        {/* <div className={styles.image} /> */}
        <main className={styles.wrapperContent}>
          <H1 className={styles.wrapperCaption}>Marketplace</H1>
          <div className={styles.wrapperDescription}>
            Marketplace is for busy hospitality managers looking <br /> for
            smart answers to common challenges.
          </div>
        </main>
        <div className={styles.filterWrapper}>
          <div className={styles.filtersField}>
            {maketplaceFiltersData.map(el => {
              const { title, id, count } = el;
              const activeFilter = isActive === el.id;
              return (
                <ButtonFilter
                  className={styles.marketplaceFilter}
                  key={id}
                  count={count}
                  title={title}
                  active={activeFilter}
                  onClick={() => {
                    setIsActive(id);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Slider
        subtitle='Popular items in'
        title='Web templates'
        data={goodsData}
      />
      <Slider subtitle='Popular items in' title='Books' data={books} />
      <Slider
        subtitle='Popular items in'
        title='Collections'
        data={goodsData}
      />
      <Slider subtitle='Popular items in' title='Case study' data={goodsData} />
      <Slider subtitle='Popular items in' title='Researches' data={goodsData} />
      <Slider subtitle='Popular items in' title='Tools' data={goodsData} />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export { Marketplace };
