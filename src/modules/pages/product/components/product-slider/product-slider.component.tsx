import * as React from 'react';
import { ProductSliderProps } from './product-slider.props';
import * as styles from './product-slider.scss';
import Carousel from 'react-multi-carousel';

/**
 * Renders ProductSlider
 */
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductSlider: React.FC<ProductSliderProps> = ({}) => {
  return (
    <div className={styles.productSlider}>
      <Carousel
        responsive={responsive}
        showDots={true}
        dotListClass='custom-dot-list-style'
      >
        {' '}
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </div>
  );
};

export { ProductSlider };
