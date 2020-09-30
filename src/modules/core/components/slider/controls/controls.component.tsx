import classNames from 'classnames';
import * as React from 'react';
import { ControlsProps } from './controls.props';
import * as styles from './controls.scss';

/**
 * Renders Controls
 */
const Controls: React.FC<ControlsProps> = ({ className, next, previous }) => (
  <div className={classNames(styles.controls, className)}>
    <div className={styles.button} onClick={() => previous()}>
      &#8592;
    </div>
    <div className={styles.button} onClick={() => next()}>
      &#8594;
    </div>
  </div>
);

export { Controls };
