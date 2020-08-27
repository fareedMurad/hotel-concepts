import * as React from 'react';
import { ProductBannerProps } from './product-banner.props';
import * as styles from './product-banner.scss';
import { H2, Paragraph } from '@core/components';
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
      <H2 className={styles.productCardTitle}>{name}</H2>
      <Paragraph className={styles.productCardDescription}>
        Lorem Ipsum has been the industry’s standard dummy text ever since the
        1500s, when an unknown printer took book Lorem Ipsum has been the Lorem
        .
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
    </div>
  );
};

export { ProductBanner };
