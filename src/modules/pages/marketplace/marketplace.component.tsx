import * as React from 'react';
import { MarketplaceProps } from './marketplace.props';
import * as styles from './marketplace.scss';
import { Header } from '@core/components/header';
import { H1, ButtonFilter, Footer, H2, PreCaption } from '@core/components';
import { useMarketplaceData } from './marketplace.hook';
import { ProductsSlider } from '@pages/components/products-slider';
import { Intro } from './intro';

/**
 * Renders Marketplace
 */
const Marketplace: React.FC<MarketplaceProps> = ({ }) => {
  const { goodsData, books } = useMarketplaceData();

  return (
    <div className={styles.marketplace}>
      <Header />
      <Intro />

      <div
        className={styles.itemsContainer}
        id='web-templates'
        style={{ marginTop: 40 }}
      >
        <PreCaption>Popular items in</PreCaption>
        <H2 className={styles.title}>Web templates</H2>
      </div>
      <ProductsSlider data={goodsData} />

      <div className={styles.itemsContainer} id='books'>
        <PreCaption>Popular items in</PreCaption>
        <H2 className={styles.title}>Books</H2>
      </div>
      <ProductsSlider data={books} />
      <div className={styles.itemsContainer} id='collections'>
        <PreCaption>Popular items in</PreCaption>
        <H2 className={styles.title}>Collections</H2>
      </div>
      <ProductsSlider data={goodsData} />
      <div className={styles.itemsContainer} id='case-study'>
        <PreCaption>Popular items in</PreCaption>
        <H2 className={styles.title}>Case study</H2>
      </div>
      <ProductsSlider data={goodsData} />
      <div className={styles.itemsContainer} id='researches'>
        <PreCaption>Popular items in</PreCaption>
        <H2 className={styles.title}>Researches</H2>
      </div>
      <ProductsSlider data={goodsData} />
      <div className={styles.itemsContainer} id='tools'>
        <PreCaption>Popular items in</PreCaption>
        <H2 className={styles.title}>Tools</H2>
      </div>
      <ProductsSlider data={goodsData} />
      <Footer />
    </div>
  );
};

export { Marketplace };
