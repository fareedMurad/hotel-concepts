import * as React from 'react';
import { ArticleImageSliderProps } from './article-image-slider.props';
import * as styles from './article-image-slider.scss';
import { Slider } from '@core/components/slider';
/**
 * Breakpoints
 */
const responsiveBreakpoints = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 2000, min: 1400 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1400, min: 930 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 930, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Custom Dots
 */
const CustomDot: React.FC<any> = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
    images
  } = rest;
  const carouselItems = images.map(el => {
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
 * Renders ArticleImageSlider
 */
const ArticleImageSlider: React.FC<ArticleImageSliderProps> = ({
  imagesForSliderData
}) => {
  if (imagesForSliderData.length === 0) return null;
  return (
    <div className={styles.articleImageSlider}>
      <Slider
        containerClass={styles.slider}
        draggable={false}
        swipeable={false}
        autoPlay
        infinite
        autoPlaySpeed={3500}
        responsive={responsiveBreakpoints}
        showDots
        customDot={<CustomDot images={imagesForSliderData} />}
        dotListClass={styles.dots}
        // customButtonGroup={
        //   <SliderButtons className={styles.controls} isBordered />
        // }
      >
        {imagesForSliderData.map((item, index) => {
          return (
            <div className={styles.wrapper} key={index}>
              <img src={item.url} className={styles.img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { ArticleImageSlider };
