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
      &#8592;
    </div>
    <div
      className={classNames(styles.button, controlClassname)}
      onClick={() => next()}
    >
      &#8594;
    </div>
  </div>
);

export { Controls };
