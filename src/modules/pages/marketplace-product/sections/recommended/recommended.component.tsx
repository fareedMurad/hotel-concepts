import { Slider } from '@core/components';
import { parsePrice } from '@core/shared';
import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { RecommendedProps } from './recommended.props';
import * as styles from './recommended.scss';

/**
 * Responsive slider breakpoints
 */
const responsive = {
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
 * Renders Recommended
 */
const Recommended: React.FC<RecommendedProps> = ({ data }) => {
  const { recommended } = data;

  if (!recommended) return null;

  return (
    <div className={styles.recommended}>
      <Title className={styles.title}>Recommended books</Title>
      <Slider
        className={styles.slider}
        itemClass={styles.sliderItem}
        controls
        controlsTheme='secondary'
        controlClassname={styles.control}
        responsive={responsive}
      >
        {recommended?.map((book, index) => {
          const {
            productImage: {
              file: { url }
            },
            name,
            pricing
          } = book;

          // Pass here localization value from state in future
          const parsedPrice = parsePrice('en-US', pricing?.price);

          return (
            <div className={styles.book} key={index}>
              <img className={styles.image} src={url} alt={url} />
              <div className={styles.divider} />
              <div className={styles.price}>{parsedPrice}</div>
              <div className={styles.name}>{name}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { Recommended };
