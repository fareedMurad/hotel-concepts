import * as React from 'react';
import { ProductCardProps } from './product-card.props';
import * as styles from './product-card.scss';
import { Paragraph, H2, H4, H3, Button } from '@core/components';

/**
 * Renders ProductCard
 */
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  author,
  category,
  languege,
  publishDate,
  details,
  price
}) => {
  return (
    <div className={styles.productCard}>
      <H2 className={styles.productCardTitle}>{title}</H2>
      <Paragraph>{author}</Paragraph>
      <div className={styles.hr} />
      <div className={styles.desription}>
        <div className={styles.descriptionBlock}>
          <H4 className={styles.descriptionTitle}>Category</H4>
          <Paragraph>{category}</Paragraph>
        </div>
        <div className={styles.descriptionBlock}>
          <H4 className={styles.descriptionTitle}>Languege</H4>
          <Paragraph>{languege}</Paragraph>
        </div>
        <div className={styles.descriptionBlock}>
          <H4 className={styles.descriptionTitle}>Publish Date</H4>
          <Paragraph>{publishDate}</Paragraph>
        </div>
      </div>
      <div className={styles.details}>
        <H4 className={styles.detailsTitle}>Details</H4>
        <Paragraph>{details}</Paragraph>
      </div>
      <H3 className={styles.price}>{price}</H3>
      <Button className={styles.confirmButton}>
        <div>Go to Checkout</div> <div>&rarr;</div>
      </Button>
    </div>
  );
};

export { ProductCard };
