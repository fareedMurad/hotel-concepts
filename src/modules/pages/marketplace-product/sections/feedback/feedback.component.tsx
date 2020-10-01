import { Slider } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { FeedbackProps } from './feedback.props';
import * as styles from './feedback.scss';

/**
 * Responsive slider breakpoints
 */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1
  }
};

/**
 * Renders Feedback
 */
const Feedback: React.FC<FeedbackProps> = ({ data }) => {
  const { comments } = data || {};

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
    </div>
  );
};

export { Feedback };
