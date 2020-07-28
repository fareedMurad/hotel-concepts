import * as React from 'react';
import { MarketplaceProps } from './marketplace.props';
import * as styles from './marketplace.scss';
import { Header } from '@core/components/header';
import {
  H1,
  ButtonFilter,
  Footer,
  H2,
  PreCaption,
  Spinner
} from '@core/components';
import { useMarketplaceData } from './hooks/marketplace.hook';
import { ProductsSlider } from '@pages/components/products-slider';
import { MarketplaceHero } from './marketplace-hero';
import { useProductsCategoriesData } from './hooks/marketplace-categories.hook';
import { MarketplaceProductsCarusel } from './marketplace-products-carusel';

/**
 * Renders Marketplace
 */
const Marketplace: React.FC<MarketplaceProps> = ({}) => {
  const { goodsData, books } = useMarketplaceData();

  const {
    productCategories,
    productCategoriesLoading
  } = useProductsCategoriesData();

  if (productCategoriesLoading) return <Spinner />;

  return (
    <div className={styles.marketplace}>
      <Header />
      <MarketplaceHero />

      {productCategories.map(el => {
        return (
          <React.Fragment key={el.sys.id}>
            <div className={styles.itemsContainer} id={el.category}>
              <PreCaption>Popular items in</PreCaption>
              <H2 className={styles.title}>{el.category}</H2>
            </div>
            <MarketplaceProductsCarusel category={el.category} />
          </React.Fragment>
        );
      })}

      {/* <div
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
      <ProductsSlider data={goodsData} /> */}
      <Footer />
    </div>
  );
};

export { Marketplace };
