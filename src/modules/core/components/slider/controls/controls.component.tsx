import { Icon } from '@core/components/icon';
import { capitalize } from '@core/shared';
import classNames from 'classnames';
import * as React from 'react';
import { ControlsProps } from './controls.props';
import * as styles from './controls.scss';

/**
 * Renders Controls
 */
const Controls: React.FC<ControlsProps> = ({
  className,
  controlClassname,
  theme,
  next,
  previous
}) => (
  <div
    className={classNames(
      styles.controls,
      className,
      styles['controls' + capitalize(theme)]
    )}
  >
    <div
      className={classNames(styles.button, controlClassname)}
      onClick={() => previous()}
    >
      <Icon className={styles.arrow} name='arrows/arrow-carusel' />
    </div>
    <div
      className={classNames(styles.button, controlClassname)}
      onClick={() => next()}
    >
      <Icon
        className={classNames(styles.arrow, styles.arrowRight)}
        name='arrows/arrow-carusel'
      />
    </div>
  </div>
);

export { Controls };
