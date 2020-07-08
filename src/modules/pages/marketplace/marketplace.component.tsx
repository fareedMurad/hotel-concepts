import * as React from 'react';
import { MarketplaceProps } from './marketplace.props';
import * as styles from './marketplace.scss';
import { Header } from '@core/components/header';
import { H1, ButtonFilter, Footer } from '@core/components';
import { useMarketplaceData } from './marketplace.hook';
import { Slider } from './sections';

/**
 * Renders Marketplace
 */
const Marketplace: React.FC<MarketplaceProps> = ({}) => {
  const { goodsData, maketplaceFiltersData, books } = useMarketplaceData();

  return (
    <div className={styles.marketplace}>
      <div className={styles.wrapper}>
        <Header />
        <div
          style={{
            backgroundImage: `url(${require('img/marketplace-bg.png')})`
          }}
          className={styles.image}
        />
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
              return (
                <ButtonFilter
                  className={styles.marketplaceFilter}
                  key={id}
                  count={count}
                  title={title}
                  onClick={() => {}}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Slider subtitle='New item in' title='Collections' data={goodsData} />
      <Slider subtitle='Popular items in' title='Books' data={books} />
      <Slider subtitle='Popular items in' title='Case study' data={goodsData} />
      <Slider
        subtitle='Popular items in'
        title='Collections'
        data={goodsData}
      />
      <Slider subtitle='Popular items in' title='Case study' data={goodsData} />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export { Marketplace };
