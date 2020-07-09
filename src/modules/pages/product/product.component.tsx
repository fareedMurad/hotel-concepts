import * as React from 'react';
import { ProductProps } from './product.props';
import * as styles from './product.scss';
import { Header } from '@core/components/header';
import { ProductSlider } from '@pages/components/product-slider';

/**
 * Renders Product
 */
const Product: React.FC<ProductProps> = ({}) => {
  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <Header whiteBackground />
      </div>
      <div className={styles.productReview}>
        <ProductSlider />
      </div>
    </div>
  );
};

export { Product };
