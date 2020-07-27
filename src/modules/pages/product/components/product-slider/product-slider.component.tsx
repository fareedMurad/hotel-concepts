import * as React from 'react';
import { ProductSliderProps } from './product-slider.props';
import * as styles from './product-slider.scss';
import Carousel from 'react-multi-carousel';
import { ButtonGroupProps, DotProps } from 'react-multi-carousel/lib/types';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { useMarketplaceData } from '@pages/marketplace/hooks/marketplace.hook';
import { Icon } from '@core/components';
import classNames from 'classnames';

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}
/**
 * Renders ProductSlider
 */
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

/**
 * Custom Dots
 */

const CustomDot: React.FC<any> = ({ onClick, ...rest }) => {
  const { books } = useMarketplaceData();
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  const carouselItems = books.map(el => {
    return <div />;
  });
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <div
      className={active ? styles.activeDot : styles.inactiveDot}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </div>
  );
};

/**
 * Custom Arrows
 */

const CustomLefttArrow: React.FC<any> = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;

  return (
    <Icon
      name='arrow-slider'
      className={classNames(styles.arrowLeft, styles.arrow)}
      onClick={() => onClick()}
    />
  );
};

const CustomRightArrow: React.FC<any> = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;

  return (
    <Icon
      name='arrow-slider'
      className={classNames(styles.arrowRight, styles.arrow)}
      onClick={() => onClick()}
    />
  );
};

const ProductSlider: React.FC<ProductSliderProps> = ({}) => {
  const { books } = useMarketplaceData();

  return (
    <div className={styles.productSlider}>
      <div className={styles.productSliderWrap}>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          containerClass={styles.container}
          itemClass={styles.item}
          sliderClass={styles.slider}
          infinite
          arrows
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLefttArrow />}
          showDots
          customDot={<CustomDot />}
          dotListClass={styles.dots}
        >
          {books.map(book => {
            const { img, id, name } = book;

            return (
              <div key={id + name} className={styles.block}>
                <img
                  className={styles.image}
                  src={require(`img/marketplace/marketplace-${img}.png`)}
                  alt=''
                  width='244px'
                  height='375px'
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export { ProductSlider };
