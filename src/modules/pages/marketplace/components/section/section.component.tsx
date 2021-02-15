import { addBookToWishlist, removeBookFromWishlist } from '@app/redux/account';
import { State } from '@app/redux/state';
import { Icon } from '@core/components';
import { useWindowSize } from '@core/shared';
import { usePrice } from '@core/shared/hooks/use-price';
import { navigate } from '@router/store';
import { showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import classNames from 'classnames';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookProps, SectionProps } from './section.props';
import * as styles from './section.scss';

/**
 * Renders single book
 */
const Book: React.FC<BookProps> = ({ className, book, onClick }) => {
  const dispatch = useDispatch();

  const {
    auth: { authorized },
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const {
    id,
    name,
    productImage: {
      file: { url }
    },
    inWishlist,
    isPreorder,
    pricing
  } = book || {};

  const { discountPrice, price } = usePrice(pricing);

  const oldSafari = browserName === 'Safari' && browserVersion <= '14';
  const imageSrc = oldSafari
    ? `${url}?h=600&w=300`
    : `${url}?h=500&w=300&fm=webp`;

  return (
    <div className={classNames(styles.book, className)} onClick={onClick}>
      <Icon
        className={styles.like}
        name={inWishlist ? 'heart' : 'like'}
        onClick={event => {
          event.stopPropagation();
          const data = { id, page: '/marketplace' };
          authorized
            ? dispatch(
                inWishlist
                  ? removeBookFromWishlist(data)
                  : addBookToWishlist(data)
              )
            : dispatch(showModal(Modals.registration));
        }}
      />
      <div className={styles.bookContainer}>
        <div className={styles.bookContainerImage}>
          {isPreorder && <div className={styles.preorder}>PRE-ORDER</div>}
          <img className={styles.image} src={imageSrc} alt={url}></img>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.price}>
        <span className={discountPrice && styles.priceOld}>$ {price}</span>
        <span className={styles.priceNew}>
          {discountPrice && <span>$ {discountPrice}</span>}
        </span>
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

/**
 * Renders Section
 */
const Section: React.FC<SectionProps> = ({
  id,
  className,
  caption,
  description,
  data
}) => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const responsiveLimit = () => {
    if (width >= 1680) return 5;
    if (width >= 1366) return 4;
    if (width >= 1024) return 3;
    if (width >= 600) return 2;
    return 1;
  };

  const [limit, setLimit] = useState(responsiveLimit());
  const showMore = data?.length > limit;

  return (
    <div className={classNames(styles.section, className)} id={id}>
      <div className={styles.container}>
        <div className={styles.description}>{description}</div>
        <div className={styles.caption}>{caption}</div>
      </div>
      {data?.length > 0 && (
        <div
          className={styles.products}
          style={{ gridTemplateColumns: `repeat(${responsiveLimit()},1fr)` }}
        >
          {data.slice(0, limit).map(book => {
            const { id } = book || {};
            return (
              <Book
                book={book}
                onClick={() => {
                  // #non-clickable
                  //dispatch(navigate(`/marketplace/${id}`));
                }}
                key={id}
              />
            );
          })}
        </div>
      )}
      {showMore ? (
        <div
          className={styles.more}
          onClick={() => setLimit(limit + responsiveLimit())}
        >
          <div className={styles.moreCaption}>Show more</div>
          <Icon className={styles.moreIcon} name='marketplace/arrow-right' />
        </div>
      ) : (
        responsiveLimit() < data.length && (
          <div
            className={styles.more}
            onClick={() => setLimit(0 + responsiveLimit())}
          >
            <div className={styles.moreCaption}>Hide</div>
            <Icon
              className={classNames(styles.moreIcon, styles.hide)}
              name='marketplace/arrow-right'
            />
          </div>
        )
      )}
    </div>
  );
};

export { Section };
