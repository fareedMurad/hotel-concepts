import * as React from 'react';
import { ExplorePagesProps } from './explore-pages.props';
import * as styles from './explore-pages.scss';
import { H2, Icon } from '@core/components';
import Carousel from 'react-multi-carousel';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import classNames from 'classnames';

/**
 * Renders ExplorePages
 */
const ExplorePages: React.FC<ExplorePagesProps> = ({}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <div className={styles.explorePages}>
      <H2 className={styles.explorePagesTitle}>Explore Pages</H2>
      <div className={styles.slider}>
        <Slider
          containerClass={styles.slider}
          draggable={false}
          swipeable={false}
          customButtonGroup={
            <SliderButtons className={classNames(styles.controls)} />
          }
          responsive={responsive}
        >
          <div className={styles.squer}>
            <Icon name='zoom' />
          </div>
          <div className={styles.squer} />
          <div className={styles.squer} />
          <div className={styles.squer} />
          <div className={styles.squer} />
          <div className={styles.squer} />
          <div className={styles.squer} />
          <div className={styles.squer} />
        </Slider>
      </div>
    </div>
  );
};

export { ExplorePages };
