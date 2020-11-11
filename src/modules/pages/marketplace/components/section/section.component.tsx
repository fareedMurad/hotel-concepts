import * as React from 'react';
import * as styles from './section.scss';
import { BookProps, SectionProps } from './section.props';
import { addBookToWishlist, removeBookFromWishlist } from '@app/redux/account';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@core/components';
import { Modals } from '@ui/models';
import { State } from '@app/redux/state';
import classNames from 'classnames';
import { navigate } from '@router/store';
import { showModal } from '@ui/modal';
import { useState } from 'react';
import { useWindowSize } from '@core/shared';

/**
 * Renders single book
 */
const Book: React.FC<BookProps> = ({ className, book, onClick }) => {
  const dispatch = useDispatch();
  const { authorized } = useSelector((state: State) => state.auth);
  const {
    id,
    name,
    price,
    productImage: {
      file: { url }
    },
    inWishlist
  } = book || {};

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

      <img className={styles.image} src={url} alt={url} />
      <div className={styles.divider} />
      <div className={styles.price}>${price}</div>
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
                  // dispatch(navigate(`/marketplace/${id}`))
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
