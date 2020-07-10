import * as React from 'react';
import { ProductProps } from './product.props';
import * as styles from './product.scss';
import { Header } from '@core/components/header';
import { ProductSlider } from '@pages/product/components/product-slider';
import { ProductCard } from './components';

import { useMarketplaceData } from '@pages/marketplace/marketplace.hook';
import { Footer } from '@core/components';

/**
 * Product-card Data
 */
const productCardData = {
  title: 'Twilight of the Money Goods',
  author: 'by John Rapley',
  category: 'Economics',
  language: 'English',
  publishDate: 'Oct. 2014',
  details: 'Best selling book like Nudge,Predictably Irrational and Thinking',
  price: '$26.99'
};

/**
 * Renders Product
 */
const Product: React.FC<ProductProps> = ({}) => {
  const { books } = useMarketplaceData();
  const {
    title,
    author,
    category,
    language,
    publishDate,
    details,
    price
  } = productCardData;

  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <Header whiteBackground />
      </div>
      <div className={styles.productReview}>
        <ProductSlider />
        <ProductCard
          title={title}
          author={author}
          category={category}
          languege={language}
          publishDate={publishDate}
          details={details}
          price={price}
        />
      </div>
      <ProductSlider />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export { Product };
