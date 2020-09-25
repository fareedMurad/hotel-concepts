import * as React from 'react';
import { FeedbackProps } from './feedback.props';
import * as styles from './feedback.scss';
import { PreCaption, SectionTitle } from '@core/components';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { FeedbackItem } from './feedback-item';
import { useTranslation } from 'react-i18next';

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

const Feedback: React.FC<FeedbackProps> = ({ data }) => {
  const [count, setCount] = React.useState(1);
  const { t } = useTranslation();
  React.useEffect(() => {
    if (count >= data.length) {
      setCount(data.length);
    } else if (count <= 1) {
      setCount(1);
    }
  }, [count]);
  return (
    <section className={styles.feedback}>
      <div className={styles.feedbackWrap}>
        <PreCaption className={styles.preCaption}>
          {t('product.feedback.caption')}
        </PreCaption>
        <SectionTitle>{t('product.feedback.title')}</SectionTitle>
        <Slider
          containerClass={styles.slider}
          draggable={false}
          swipeable={false}
          keyBoardControl={false}
          responsive={responsiveBreakpoints}
          customButtonGroup={
            <SliderButtons
              className={styles.controls}
              count={count}
              setCount={setCount}
            />
          }
          showDots
          customDot={<CustomDot items={data} />}
          dotListClass={styles.dots}
        >
          {data.map(comment => {
            return (
              <div key={comment.sys.id}>
                <FeedbackItem comment={comment} />
              </div>
            );
          })}
        </Slider>
        <div className={styles.commentsCount}>
          {count} of {data.length}
        </div>
      </div>
    </section>
  );
};

export { Feedback };
