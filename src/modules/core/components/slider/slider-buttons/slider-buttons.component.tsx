import * as React from 'react';
import { SliderButtonsProps } from './slider-buttons.props';
import * as styles from './slider-buttons.scss';
import classNames from 'classnames';
import { Button } from '@core/components/button';
import { relative } from 'path';
import { Icon } from '@core/components/icon';

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
      <div
        className={styles.arrow}
        onClick={() => setCount && setCount(count - 1)}
      >
        <Icon className={styles.icon} name='arrows/arrow-carusel' />
      </div>
    </button>
    <button
      onClick={next}
      className={classNames(styles.next, { [styles.bordered]: isBordered })}
    >
      <div
        className={styles.arrow}
        onClick={() => setCount && setCount(count + 1)}
      >
        <Icon className={styles.iconRight} name='arrows/arrow-carusel' />
      </div>
    </button>
  </div>
);

export { SliderButtons };
