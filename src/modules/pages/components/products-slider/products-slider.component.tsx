import * as React from 'react';
import { SliderProps } from './products-slider.props';
import * as styles from './products-slider.scss';
import { SliderCard } from '../slider-card';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { Slider } from '@core/components/slider';
import classNames from 'classnames';
/**
 * responsive breakpoints
 */
const responsiveBreakpoints = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1290 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1290, min: 1000 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1000, min: 700 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 699, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders Slider
 */
const ProductsSlider: React.FC<SliderProps> = ({ subtitle, title, data, notOrangeButtons }) => {
  return (
    <div className={styles.slider}>
      <Slider
        containerClass={styles.slider}
        draggable={false}
        swipeable={false}
        customButtonGroup={<SliderButtons className={classNames(styles.controls, {
          [styles.controlsNotOrange]: notOrangeButtons
        })} />}
        responsive={responsiveBreakpoints}
      >
        {data.map(el => {
          const { img, name, price, id } = el;
          return (
            <SliderCard
              key={id}
              img={img}
              name={name}
              price={price}
              id={id}
              onClick={() => { }}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export { ProductsSlider };
