import { Slider } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { ExploreProps } from './explore.props';
import * as styles from './explore.scss';

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
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
          }
        }}
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
