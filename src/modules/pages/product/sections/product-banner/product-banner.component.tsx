import * as React from 'react';
import { ProductBannerProps } from './product-banner.props';
import * as styles from './product-banner.scss';
import { H2, Paragraph, H3, Button } from '@core/components';
import Moment from 'react-moment';
import { useTranslation } from 'react-i18next';

/**
 * Renders ProductBanner
 */
const ProductBanner: React.FC<ProductBannerProps> = ({ product }) => {
  const {
    authorsCollection: { items: authors },
    name,
    price,
    publishDate,
    languages,
    productImage,
    previewDescription
  } = product;
  const { t } = useTranslation();

  return (
    <div className={styles.productBanner}>
      <div className={styles.productImage}>
        <img src={productImage.url} alt={name} width='224px' height='343px' />
      </div>
      <div className={styles.productDescription}>
        <H2 className={styles.productCardTitle}>{name}</H2>
        <Paragraph className={styles.productCardDescription}>
          {previewDescription}
        </Paragraph>
        <div className={styles.authors}>
          by{' '}
          {authors.map(author => (
            <span>
              {' '}
              {author.name} {author.surname}
            </span>
          ))}
        </div>

        <div className={styles.productCardAdditional}>
          <div className={styles.productCardAdditionalLanguages}>
            <h1>Languages</h1>
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
            children={t('product.product-banner.button-text')}
            arrow
          />
        </div>
      </div>
    </div>
  );
};

export { ProductBanner };
