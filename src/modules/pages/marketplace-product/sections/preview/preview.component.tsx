import { Button, Icon, Preloader } from '@core/components';
import { addBookToWishlist, removeBookFromWishlist } from '@app/redux/account';
import { addProductToCart } from '@app/redux/cart';
import { SEO } from '@core/components/seo/seo.component';
import { ShareSocial } from '@core/components/share';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { BookPreviewModal } from '@pages/components';
import { readBook } from '@ui/modal';
import { Preloaders } from '@ui/models';
import moment from 'moment';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { PreviewProps } from './preview.props';
import * as styles from './preview.scss';
import classNames from 'classnames';

/**
 * Renders Preview
 */
const Preview: React.FC<PreviewProps> = ({ data, subscriptionStatus }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    id,
    img,
    name,
    price,
    inCart,
    authors,
    languages,
    authorized,
    isPreorder,
    preorderDate,
    inWishlist,
    publishDate,
    previewPages,
    highlightsText,
    availableFormats,
    previewDescription
  } = data;

  return (
    <div className={styles.preview}>
      <SEO title={name} thumbnail={img} url={window.location.href} />
      <div onClick={() => history.goBack()} className={styles.back}>
        <Icon name='arrows/arrow-back' className={styles.arrow} />
        <div className={styles.backCaption}>{t('product.back')}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.showcase}>
          <div className={styles.showcaseContainer}>
            <div className={styles.showcasePreview}>
              <img className={styles.showcaseImage} src={img} />
              {isPreorder && (
                <div className={styles.showcaseBanner}>PRE-ORDER</div>
              )}
            </div>
          </div>
          <Button
            className={styles.show}
            theme='secondary'
            onClick={() => {
              dispatch(readBook({ url: previewPages.file.url }));
            }}
          >
            Show content
          </Button>
          <div className={styles.showcaseInfo}>
            <div className={styles.share}>
              <ShareSocial link={window.location.href} />
            </div>
            <div className={styles.formats}>
              {availableFormats?.map((format, index) => (
                <div className={styles.format} key={index}>
                  {format}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.section}>
            {authorized && (
              <Icon
                className={styles.like}
                name={inWishlist ? 'heart' : 'like'}
                onClick={() => {
                  const data = { id, page: `/marketplace/${id}` };

                  dispatch(
                    inWishlist
                      ? removeBookFromWishlist(data)
                      : addBookToWishlist(data)
                  );
                }}
              />
            )}
            <div className={styles.caption}>{name}</div>
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
            <div className={styles.highlights}>
              {highlightsText?.map((highlight, index) => (
                <div className={styles.highlight} key={index}>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
          <div className={classNames(styles.section, styles.sectionPrice)}>
            <div className={styles.price}>${price}</div>
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
              {/* {!subscriptionStatus && (
                <div className={styles.subscription}>
                  <div>This book is free with subscription</div>
                  <div>Starting from 10$/month</div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <BookPreviewModal />
    </div>
  );
};

export { Preview };
