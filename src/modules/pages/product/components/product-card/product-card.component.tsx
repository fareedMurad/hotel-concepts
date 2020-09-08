import * as React from 'react';
import { ProductCardProps } from './product-card.props';
import * as styles from './product-card.scss';
import { Paragraph, H2, H4, H3, Button } from '@core/components';
import Moment from 'react-moment';
import { useTranslation } from 'react-i18next';

/**
 * Renders ProductCard
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const {
    authorsCollection: { items: authors },
    name,
    price,
    publishDate,
    bookCategory,
    languages,
    previewDescription,
    highlightsText
  } = product;

  return (
    <div className={styles.productCard}>
      <H2 className={styles.productCardTitle}>{name}</H2>
      <Paragraph className={styles.productCardDescription}>
        {previewDescription}
      </Paragraph>
      <div className={styles.authors}>
        by{' '}
        {authors.map(author => (
          <span>{author.name}; </span>
        ))}
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

      <div className={styles.circlesWrapper}>
        <div className={styles.circlesWrapperCircle}>{highlightsText[0]}</div>
        <div className={styles.circlesWrapperCircle}>{highlightsText[1]}</div>
        <div className={styles.circlesWrapperCircle}>{highlightsText[2]}</div>
      </div>
      <div>
        <H3 className={styles.price}>{`$${price}`}</H3>
        <Button
          className={styles.confirmButton}
          children={t('product.card.button-text')}
          arrow='&rarr;'
        />
      </div>
    </div>
  );
};

export { ProductCard };
