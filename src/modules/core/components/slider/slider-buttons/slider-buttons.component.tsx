import * as React from 'react';
import { SliderButtonsProps } from './slider-buttons.props';
import * as styles from './slider-buttons.scss';
import classNames from 'classnames';
import { Button } from '@core/components/button';

/**
 * Renders SliderButtons
 */
const SliderButtons: React.FC<SliderButtonsProps> = ({
  next, previous, className, isBordered, path, btnText, onClick
}) => {
  return (
    <div className={classNames(styles.sliderButtons, className)}>
      {btnText && <Button onClick={onClick} className={styles.button} >
        <div>{btnText}</div> <div>&#8594;</div>
      </Button>}
      <button onClick={previous} className={classNames(styles.previous, { [styles.bordered]: isBordered })}>
        <div>&#8592;</div>
      </button>
      <button onClick={next} className={classNames(styles.next, { [styles.bordered]: isBordered })}>
        <div>&#8594;</div>
      </button>
    </div>
  );
};

export { SliderButtons };
