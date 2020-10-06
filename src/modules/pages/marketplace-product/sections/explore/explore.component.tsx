import { Slider } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { ExploreProps } from './explore.props';
import * as styles from './explore.scss';

/**
 * Responsive slider breakpoints
 */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1675 },
    items: 5,
    slidesToSlide: 1
  },
  desktop2: {
    breakpoint: { max: 1675, min: 1345 },
    items: 4,
    slidesToSlide: 1
  },
  desktop3: {
    breakpoint: { max: 1345, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 710 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 710, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders Explore
 */
const Explore: React.FC<ExploreProps> = ({ data }) => {
  const { coverPhotos } = data || {};

  if (!coverPhotos) return null;

  return (
    <div className={styles.explore}>
      <Title className={styles.title}>Explore pages</Title>
      <Slider
        className={styles.slider}
        responsive={responsive}
        controls
        itemClass={styles.item}
        draggable={false}
        swipeable={false}
        controlsTheme='tertiary'
      >
        {coverPhotos?.map(({ file }, index) => (
          <div key={index} className={styles.wrapper}>
            <img className={styles.image} src={file?.url} alt={file?.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { Explore };
