import * as React from 'react';
import Carousel from 'react-multi-carousel';
import * as styles from './slider.scss';

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
 * Renders Slider
 */
const Slider: React.FC<any> = ({
  children,
  draggable,
  swipeable,
  responsive,
  itemClass,
  ...rest
}) => {
  const drag = draggable === undefined ? true : draggable;
  const swipe = swipeable === undefined ? true : swipeable;
  const resp = responsive === undefined ? responsiveBreakpoints : responsive;
  return (
    <Carousel
      responsive={resp}
      ssr
      draggable={drag}
      swipeable={swipe}
      arrows={false}
      itemClass={itemClass}
      sliderClass={styles.slider}
      {...rest}
    >
      {children}
    </Carousel>
  );
};

export { Slider };
