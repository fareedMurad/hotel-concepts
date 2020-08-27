import * as React from 'react';
import { ProductDescriptionProps } from './product-description.props';
import * as styles from './product-description.scss';
import { H1 } from '@core/components';

/**
 * Renders ProductDescription
 */
const ProductDescription: React.FC<ProductDescriptionProps> = ({}) => {
  return (
    <div className={styles.productDescription}>
      <div className={styles.prproductDescriptionText}>
        <H1>Product Description</H1>
      </div>
    </div>
  );
};

export { ProductDescription };
