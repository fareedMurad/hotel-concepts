import { Button } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import moment from 'moment';
import * as React from 'react';
import { BannerProps } from './banner.props';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import * as styles from './banner.scss';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '@app/redux/cart';
import classNames from 'classnames';
import { usePrice } from '@core/shared/hooks/use-price';

/**
 * Renders Banner
 */
const Banner: React.FC<BannerProps> = ({ data, subscriptionStatus }) => {
  const {
    id,
    img,
    name,
    inCart,
    pricing,
    authors,
    languages,
    isPreorder,
    publishDate,
    preorderDate,
    previewDescription
  } = data;
  const dispatch = useDispatch();

  const { discountPrice, price } = usePrice(pricing);

  return (
    <div className={styles.banner}>
      <div className={styles.box}>
        <div className={styles.preview}>
          <img className={styles.previewImage} src={img} />
          {isPreorder && <div className={styles.previewBanner}>PRE-ORDER</div>}
        </div>
        <div className={styles.container}>
          <div className={styles.section}>
            <Title>{name}</Title>
            <div className={styles.description}>{previewDescription}</div>
            <div className={styles.authors}>
              by
              {authors?.map((author, index) => (
                <a
                  className={styles.author}
                  key={index}
                  onClick={() => scrollTo('authors')}
                >
                  {author.name} {author.surname}
                </a>
              ))}
            </div>
            <div className={styles.meta}>
              <div className={styles.languages}>
                <span className={styles.languagesBold}>Language</span>
                <span className={styles.languagesList}>{languages}</span>
              </div>
              <div className={styles.published}>
                <span className={styles.publishedBold}>Published</span>
                <span className={styles.publishedDate}>
                  {moment(publishDate).format('YYYY')}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.price}>
            <span className={discountPrice && styles.priceOld}>$ {price}</span>
            {discountPrice && (
              <span className={styles.priceNew}>$ {discountPrice}</span>
            )}
          </div>
          <div className={styles.controls}>
            <Button
              className={classNames(styles.checkout, {
                [styles.checkoutPreorder]: isPreorder
              })}
              arrow={!inCart}
              disabled={inCart}
              onClick={() => {
                !inCart &&
                  dispatch(addProductToCart({ path: id, quantity: 1 }));
              }}
            >
              {inCart ? 'In cart' : isPreorder ? 'Pre-order' : 'Add to cart'}
            </Button>
            {isPreorder && (
              <div className={styles.preorder}>
                Available for Pre-Order. This item will be available on{' '}
                <span className={styles.preorderDate}>
                  {moment(preorderDate).format('MMMM DD, YYYY')}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner };
