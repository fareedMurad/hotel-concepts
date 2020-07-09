import * as React from 'react';
import { SliderButtonsProps } from './slider-buttons.props';
import * as styles from './slider-buttons.scss';
import classNames from 'classnames';
import { Button } from '@core/components/button';

/**
 * Renders SliderButtons
 */
const SliderButtons: React.FC<SliderButtonsProps> = ({
  next, previous, className, isBordered, path, btnText
}) => {
  return (
    <div className={classNames(styles.sliderButtons, classNames)}>
      {btnText && <Button className={styles.button} >
        <div>{btnText}</div>
      </Button>}
      <button onClick={previous} className={styles.previous}>
        <div>&#8592;</div>
      </button>
      <button onClick={next} className={styles.next}>
        <div>&#8594;</div>
      </button>
    </div>
  );
};

export { SliderButtons };
