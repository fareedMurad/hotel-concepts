import * as React from 'react';
import * as styles from './products.scss';
import { ProductsProps } from './products.props';
import { Section } from '@pages/marketplace/components';

/**
 * Renders Products
 */
const Products: React.FC<ProductsProps> = ({ categories }) => (
  <div className={styles.products}>
    {categories?.map(({ category: { category, id }, items }) => {
      const isNotEmpty = items.length > 0;

      return (
        isNotEmpty && (
          <Section
            id={id}
            className={styles.section}
            caption={category}
            description='New items in'
            data={items}
            key={id}
          />
        )
      );
    })}
  </div>
);

export { Products };
