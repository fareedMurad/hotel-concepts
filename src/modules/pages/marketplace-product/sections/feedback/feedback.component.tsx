import { Slider } from '@core/components';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { Title } from '@pages/marketplace-product/components';
import classNames from 'classnames';
import * as React from 'react';
import { useState, useEffect } from 'react';
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

  const carouselItems = items.map((_, indx) => <div key={indx} />);

  return (
    <React.Fragment>
      <div
        className={classNames(
          styles.dot,
          active ? styles.activeDot : styles.inactiveDot
        )}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </div>
    </React.Fragment>
  );
};

/**
 * Renders Feedback
 */
const Feedback: React.FC<FeedbackProps> = ({ data }) => {
  const { comments } = data || {};
  const [count, setCount] = useState(1);
  useEffect(() => {
    count < 1 && setCount(1);
    count > comments?.length && setCount(comments?.length);
  }, [count]);

  return (
    <div className={styles.feedback}>
      <div className={styles.label}>Feedback</div>
      <Title className={styles.title}>Kordie Impact</Title>
      <Slider
        className={styles.slider}
        itemClass={styles.sliderItem}
        responsive={responsive}
        controls
        controlsTheme='secondary'
        controlsClassname={styles.controls}
        controlClassname={styles.control}
        showDots={true}
        customDot={<CustomDot items={comments} />}
        dotListClass={styles.dots}
        count={count}
        setCount={setCount}
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
      <div className={styles.commentsCount}>
        {count} of {comments?.length}
      </div>
    </div>
  );
};

export { Feedback };
