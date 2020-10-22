import { addBookToWishlist, removeBookFromWishlist } from '@app/redux/account';
import { State } from '@app/redux/state';
import { Button, Icon, Slider } from '@core/components';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookProps, SectionProps } from './section.props';
import * as styles from './section.scss';

/**
 * Responsive slider breakpoints
 */
const responsive = {
  desktopXlg: {
    breakpoint: { max: 3000, min: 2000 },
    items: 6,
    slidesToSlide: 1
  },
  desktopLg: {
    breakpoint: { max: 1999, min: 1367 },
    items: 5,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 1366, min: 1025 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 601 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders single book
 */
const Book: React.FC<BookProps> = ({ book, onClick }) => {
  const dispatch = useDispatch();
  const { authorized } = useSelector((state: State) => state.auth);
  const {
    id,
    name,
    price,
    authors,
    productImage: {
      file: { url }
    },
    inWishlist
  } = book || {};

  return (
    <div className={styles.book} onClick={onClick}>
      {authorized && (
        <Icon
          className={styles.like}
          name={inWishlist ? 'heart' : 'like'}
          onClick={event => {
            event.stopPropagation();
            const data = { id, preloader: Preloaders.marketplace };

            dispatch(
              inWishlist
                ? removeBookFromWishlist(data)
                : addBookToWishlist(data)
            );
          }}
        />
      )}
      <img className={styles.image} src={url} alt={url} />
      <div className={styles.divider} />
      <div className={styles.meta}>
        <div className={styles.price}>${price}</div>
        <div className={styles.authors}>
          {authors.map(({ id, name, surname }) => (
            <div className={styles.author} key={id}>
              {name} {surname}
            </div>
          ))}
        </div>
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

  return (
    <div className={classNames(styles.section, className)} id={id}>
      <div className={styles.container}>
        <div className={styles.description}>{description}</div>
        <div className={styles.caption}>{caption}</div>
      </div>
      {data?.length > 0 && (
        <Slider
          className={styles.slider}
          itemClass={styles.sliderItem}
          controls
          controlsTheme='primary'
          responsive={responsive}
        >
          {data.map(book => {
            const { id } = book || {};

            return (
              <Book
                book={book}
                onClick={() => dispatch(navigate(`/marketplace/${id}`))}
                key={id}
              />
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export { Section };
