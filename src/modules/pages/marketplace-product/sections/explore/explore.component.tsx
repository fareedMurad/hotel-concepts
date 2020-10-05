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
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders Explore
 */
const Explore: React.FC<ExploreProps> = ({ data }) => {
  const { previewPages } = data || {};

  return (
    <div className={styles.explore}>
      <Title className={styles.title}>Explore pages</Title>
      <Slider
        className={styles.slider}
        responsive={responsive}
        controls
        controlsTheme='tertiary'
      >
        <div>
          <img
            className={styles.image}
            src={previewPages?.file?.url}
            alt={previewPages?.file?.url}
          />
        </div>
      </Slider>
    </div>
  );
};

export { Explore };
