import classNames from 'classnames';
import * as React from 'react';
import Carousel from 'react-multi-carousel';
import { Controls } from './controls';
import { SliderButtons } from './slider-buttons';
import { SliderProps } from './slider.props';
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
const Slider: React.FC<SliderProps> = ({
  children,
  className,
  draggable,
  autoPlay,
  infinite,
  keyBoardControl,
  controls,
  swipeable,
  responsive,
  itemClass,
  customButtonGroup,
  controlsClassname,
  controlsTheme,
  controlClassname,
  transitionDuration,
  count,
  setCount,
  ...props
}) => (
  <Carousel
    containerClass={classNames(styles.slider, className)}
    responsive={responsive || responsiveBreakpoints}
    draggable={draggable}
    swipeable={swipeable}
    infinite={infinite}
    autoPlay={autoPlay}
    keyBoardControl={keyBoardControl}
    transitionDuration={transitionDuration}
    customButtonGroup={
      controls ? (
        <Controls
          className={controlsClassname}
          theme={controlsTheme}
          controlClassname={controlClassname}
          count={count}
          setCount={setCount}
        />
      ) : (
        customButtonGroup
      )
    }
    arrows={false}
    itemClass={itemClass}
    sliderClass={styles.slider}
    {...props}
  >
    {children}
  </Carousel>
);

/**
 * Default props
 */
Slider.defaultProps = {};

export { Slider };
