import * as React from 'react';
import { SliderButtonsProps } from './slider-buttons.props';
import * as styles from './slider-buttons.scss';
import classNames from 'classnames';
import { Button } from '@core/components/button';
import { relative } from 'path';

/**
 * Renders SliderButtons
 */
const SliderButtons: React.FC<SliderButtonsProps> = ({
  next,
  previous,
  className,
  isBordered,
  path,
  btnText,
  onClick,
  setCount,
  count
}) => (
  <div className={classNames(styles.sliderButtons, className)}>
    {btnText && (
      <Button
        onClick={onClick}
        className={styles.button}
        children={btnText}
        arrow
        width={204}
      />
    )}
    <button
      onClick={previous}
      className={classNames(styles.previous, {
        [styles.bordered]: isBordered
      })}
    >
      <div className={styles.arrow} onClick={() => setCount(count - 1)}>
        &#8592;
      </div>
    </button>
    <button
      onClick={next}
      className={classNames(styles.next, { [styles.bordered]: isBordered })}
    >
      <div className={styles.arrow} onClick={() => setCount(count + 1)}>
        &#8594;
      </div>
    </button>
  </div>
);

export { SliderButtons };
