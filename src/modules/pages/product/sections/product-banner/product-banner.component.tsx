import * as React from 'react';
import { ProductBannerProps } from './product-banner.props';
import * as styles from './product-banner.scss';
import { H2, Paragraph, H3, Button } from '@core/components';
import Moment from 'react-moment';

/**
 * Renders ProductBanner
 */
const ProductBanner: React.FC<ProductBannerProps> = ({ product }) => {
  const {
    authors,
    name,
    price,
    publishDate,
    bookCategory,
    languages,
    details
  } = product;

  return (
    <div className={styles.productBanner}>
    <div className={styles.productImage}>
        <img
          src='https://images.ctfassets.net/qgx3dmmccd7u/M9DtD304X9Qi36JV8R32B/1635006a72c5ad51d3000fe230a89dbd/book-large.png'
          alt='book'
          width='280px'
        />
      </div>
      <div className={styles.productDescription}>
        <H2 className={styles.productCardTitle}>{name}</H2>
        <Paragraph className={styles.productCardDescription}>
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took book Lorem Ipsum has been the
          Lorem .
        </Paragraph>
        <div className={styles.authors}>
          by <span>{authors[0].name}</span>
        </div>

        <div className={styles.productCardAdditional}>
          <div className={styles.productCardAdditionalLanguages}>
            <h1>Langueges</h1>
            <Paragraph>{languages}</Paragraph>
          </div>
          <div className={styles.productCardAdditionalPublished}>
            <h1>Publish Date</h1>
            <Paragraph>
              <Moment format={'MMM DD, YYYY'}>{publishDate}</Moment>
            </Paragraph>
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

export { ProductBanner };
