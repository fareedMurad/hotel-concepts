import * as React from 'react';
import { ProductCardProps } from './product-card.props';
import * as styles from './product-card.scss';
import { Paragraph, H2, H4, H3, Button } from '@core/components';
import Moment from 'react-moment';

/**
 * Renders ProductCard
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    author,
    name,
    price,
    publishDate,
    bookCategory,
    languages,
    details
  } = product;
  console.log(author);
  return (
    <div className={styles.productCard}>
      <H2 className={styles.productCardTitle}>{name}</H2>
      <Paragraph className={styles.productCardDescription}>
        Lorem Ipsum has been the industry’s standard dummy text ever since the
        1500s, when an unknown printer took book Lorem Ipsum has been the Lorem
        .
      </Paragraph>
      <div className={styles.descriptionAuthors}>
        by <span>{author}</span>
      </div>

      <div className={styles.wrapper}>
        <div>
          <div className={styles.desription}>
            <div className={styles.descriptionBlock}>
              <H4 className={styles.descriptionTitle}>Category</H4>
              <Paragraph>{bookCategory}</Paragraph>
            </div>
            <div className={styles.descriptionBlock}>
              <H4 className={styles.descriptionTitle}>Languege</H4>
              <Paragraph>{languages}</Paragraph>
            </div>

            <div className={styles.descriptionBlock}>
              <H4 className={styles.descriptionTitle}>Publish Date</H4>
              <Paragraph>
                <Moment format={'MMM DD, YYYY'}>{publishDate}</Moment>
              </Paragraph>
            </div>
          </div>
          <div className={styles.details}>
            <H4 className={styles.detailsTitle}>Details</H4>
            <Paragraph>{details}</Paragraph>
          </div>
        </div>
        <div>
          <H3 className={styles.price}>{`$${price}`}</H3>
          <Button
            className={styles.confirmButton}
            children='Go to Checkout'
            arrow='&rarr;'
          />
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
