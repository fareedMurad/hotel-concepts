import * as React from 'react';
import { ProductCardProps } from './product-card.props';
import * as styles from './product-card.scss';
import { Paragraph, H2, H4, H3, Button } from '@core/components';
import Moment from 'react-moment';
import { useTranslation } from 'react-i18next';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useDispatch } from 'react-redux';
import { checkout } from '@app/redux/checkout';
import { Session } from '@app/models/fastspring';

/**
 * Renders ProductCard
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const ScrollToAuthors = () => {
    scrollTo('authors');
  };
  const dispatch = useDispatch();
  const {
    authorsCollection: { items: authors },
    name,
    price,
    publishDate,
    bookCategory,
    languages,
    previewDescription,
    highlightsText
    // sys: { id }
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
          <a onClick={() => ScrollToAuthors()}>
            {' '}
            {author.name} {author.surname}
          </a>
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

      <div className={styles.circlesWrapper}>
        <div className={styles.circlesWrapperCircle}>{highlightsText[0]}</div>
        <div className={styles.circlesWrapperCircle}>{highlightsText[1]}</div>
        <div className={styles.circlesWrapperCircle}>{highlightsText[2]}</div>
      </div>
      <div className={styles.footer}>
        <H3 className={styles.price}>{`$${price}`}</H3>
        <Button
          className={styles.confirmButton}
          children={t('product.card.button-text')}
          arrow='&rarr;'
          onClick={() => {
            const session: Session = {
              products: [
                {
                  path: '2geEtN0sCVVlQZuHtRAwu9',
                  quantity: 1
                }
              ],
              checkout: true
            };
            dispatch(checkout(session));
          }}
        />
      </div>
    </div>
  );
};

export { ProductCard };
