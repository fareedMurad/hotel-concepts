import * as React from 'react';
import { MarketplaceProps } from './marketplace.props';
import * as styles from './marketplace.scss';
import { Header } from '@core/components/header';
import { H1, ButtonFilter, Footer, H2, PreCaption } from '@core/components';
import { useMarketplaceData } from './marketplace.hook';
import { ProductsSlider } from '@pages/components/products-slider';

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
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Header />
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
            const activeFilter = isActive === el.id;
            return (
              <ButtonFilter
                className={styles.marketplaceFilter}
                key={id}
                count={count}
                title={title}
                active={activeFilter}
                anchor={anchor}
                onClick={() => setIsActive(id)}
              />
            );
          })}
        </div>
      </div>

      <div
        className={styles.itemsContainer}
        id='web-templates'
        style={{ marginTop: 40 }}
      >
        <PreCaption>Popular items in</PreCaption>
        <H2>Web templates</H2>
      </div>
      <ProductsSlider data={goodsData} />

      <div className={styles.itemsContainer} id='books'>
        <PreCaption>Popular items in</PreCaption>
        <H2>Books</H2>
      </div>
      <ProductsSlider data={books} />
      <div className={styles.itemsContainer} id='collections'>
        <PreCaption>Popular items in</PreCaption>
        <H2>Collections</H2>
      </div>
      <ProductsSlider data={goodsData} />
      <div className={styles.itemsContainer} id='case-study'>
        <PreCaption>Popular items in</PreCaption>
        <H2>Case study</H2>
      </div>
      <ProductsSlider data={goodsData} />
      <div className={styles.itemsContainer} id='researches'>
        <PreCaption>Popular items in</PreCaption>
        <H2>Researches</H2>
      </div>
      <ProductsSlider data={goodsData} />
      <div className={styles.itemsContainer} id='tools'>
        <PreCaption>Popular items in</PreCaption>
        <H2>Tools</H2>
      </div>
      <ProductsSlider data={goodsData} />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export { Marketplace };
