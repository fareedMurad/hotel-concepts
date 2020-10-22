import { Button, Icon, Preloader } from '@core/components';
import { addBookToWishlist, removeBookFromWishlist } from '@app/redux/account';
import { cart } from '@app/redux/cart';
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

/**
 * Renders Preview
 */
const Preview: React.FC<PreviewProps> = ({ data }) => {
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
        <div>&#8592;</div>
        <div className={styles.backCaption}>{t('product.back')}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.showcase}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={img} />
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
          {authorized && (
            <div className={styles.icon}>
              <Icon
                className={styles.like}
                name={inWishlist ? 'heart' : 'like'}
                onClick={() => {
                  const data = { id, preloader: Preloaders.marketplaceProduct };

                  dispatch(
                    inWishlist
                      ? removeBookFromWishlist(data)
                      : addBookToWishlist(data)
                  );
                }}
              />
              <Preloader
                className={styles.iconPreloader}
                id={Preloaders.marketplace}
              />
            </div>
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
          <div className={styles.price}>${price}</div>
          <div className={styles.controls}>
            <Button
              className={styles.checkout}
              arrow={!inCart}
              disabled={inCart}
              onClick={() => {
                !inCart && dispatch(cart.add({ path: id, quantity: 1 }));
              }}
            >
              {inCart ? 'In cart' : 'Add to cart'}
            </Button>
            <div className={styles.subscriptionHint}>
              <div>This book is free with subscription</div>
              <div>Starting from 10$/month</div>
            </div>
          </div>
        </div>
      </div>
      <BookPreviewModal />
    </div>
  );
};

export { Preview };
