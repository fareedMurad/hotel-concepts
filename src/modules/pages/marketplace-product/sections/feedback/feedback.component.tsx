import { Slider } from '@core/components';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { useState } from 'react';
import { FeedbackProps } from './feedback.props';
import * as styles from './feedback.scss';

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
 * Custom dots for slider
 */

const CustomDot: React.FC<any> = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
    items
  } = rest;
  const carouselItems = items.map(el => {
    return <div />;
  });

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
 * Renders Feedback
 */
const Feedback: React.FC<FeedbackProps> = ({ data }) => {
  const { comments } = data || {};
  const [count, setCount] = useState(1);

  return (
    <div className={styles.feedback}>
      <div className={styles.label}>Feedback</div>
      <Title className={styles.title}>Cordie Impact</Title>
      <Slider
        className={styles.slider}
        itemClass={styles.sliderItem}
        responsive={responsive}
        controls
        controlsTheme='secondary'
        controlsClassname={styles.controls}
        controlClassname={styles.control}
        customButtonGroup={
          <SliderButtons
            className={styles.commentsCountControls}
            count={count}
            setCount={setCount}
          />
        }
        showDots
        customDot={<CustomDot items={comments} />}
        dotListClass={styles.dots}
      >
        {comments?.map(({ id, name, text, companyName, photo }) => (
          <div className={styles.container} key={id}>
            <div className={styles.description}>{text}</div>
            <div className={styles.meta}>
              <img
                className={styles.metaImage}
                src={photo?.file?.url}
                alt={photo?.file?.url}
              />
              <div className={styles.metaContainer}>
                <div className={styles.name}>{name}</div>
                <div className={styles.company}>from "{companyName}"</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* <div className={styles.commentsCount}>
        {count} of {comments?.length}
      </div> */}
    </div>
  );
};

export { Feedback };
