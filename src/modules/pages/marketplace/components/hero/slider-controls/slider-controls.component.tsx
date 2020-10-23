import { Icon } from '@core/components';
import classNames from 'classnames';
import * as React from 'react';
import { SliderControlsProps } from './slider-controls.props';
import * as styles from './slider-controls.scss';

/**
 * Renders SliderControls
 */
const SliderControls: React.FC<SliderControlsProps> = ({
  className,
  next,
  previous,
  carouselState
}) => {
  const { currentSlide, totalItems } = carouselState || {};
  const prevDisabled = currentSlide == 0;
  const nextDisaled = currentSlide == totalItems - 1;

  return (
    <div className={classNames(styles.sliderControls, className)}>
      <div
        className={classNames(styles.control, {
          [styles.controlDisabled]: prevDisabled
        })}
        onClick={() => previous()}
      >
        <Icon name='marketplace/arrow' />
      </div>
      <div
        className={classNames(styles.control, {
          [styles.controlDisabled]: nextDisaled
        })}
        onClick={() => next()}
      >
        <Icon className={styles.arrowRight} name='marketplace/arrow' />
      </div>
    </div>
  );
};

export { SliderControls };
