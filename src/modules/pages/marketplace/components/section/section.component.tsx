import { addBookToWishlist } from '@app/redux/account';
import { Button, Icon, Slider } from '@core/components';
import { navigate } from '@router/store';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { BookProps, SectionProps } from './section.props';
import * as styles from './section.scss';

/**
 * Renders single book
 */
const Book: React.FC<BookProps> = ({ book, onClick }) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    productImage: {
      file: { url }
    }
  } = book || {};

  return (
    <div className={styles.book} onClick={onClick}>
      <Icon
        className={styles.like}
        name='like'
        onClick={() => dispatch(addBookToWishlist(id))}
      />
      <img className={styles.image} src={url} alt={url} />
      <div className={styles.divider} />
      <div className={styles.name}>{name}</div>
      <div className={styles.controls}>
        <Button arrow>Read</Button>
        <Button arrow theme='secondary'>
          Download
        </Button>
      </div>
    </div>
  );
};

const responsiveBreakpoints = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
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
          containerClass={styles.content}
          itemClass={styles.sliderItem}
          controls
          responsive={responsiveBreakpoints}
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
