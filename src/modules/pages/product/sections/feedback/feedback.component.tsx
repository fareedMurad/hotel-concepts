import * as React from 'react';
import { FeedbackProps } from './feedback.props';
import * as styles from './feedback.scss';
import { PreCaption, SectionTitle } from '@core/components';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { FeedbackItem } from './feedback-item';

/**
 * Responsive for slider
 */

const responsiveBreakpoints = {
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

const Feedback: React.FC<FeedbackProps> = ({}) => {
  const items = [
    { item: <FeedbackItem />, key: 1 },
    { item: <FeedbackItem />, key: 2 },
    { item: <FeedbackItem />, key: 3 }
  ];
  return (
    <section className={styles.feedback}>
      <div className={styles.feedbackWrap}>
        <PreCaption className={styles.preCaption}>Feedback</PreCaption>
        <SectionTitle>Cordie Impact</SectionTitle>
        <Slider
          containerClass={styles.slider}
          draggable={false}
          swipeable={false}
          responsive={responsiveBreakpoints}
          customButtonGroup={<SliderButtons className={styles.controls} />}
          showDots
          customDot={<CustomDot items={items} />}
          dotListClass={styles.dots}
        >
          {items.map(el => el.item)}
        </Slider>
      </div>
    </section>
  );
};

export { Feedback };
