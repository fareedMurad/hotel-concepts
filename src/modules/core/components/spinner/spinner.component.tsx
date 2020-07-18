import * as React from 'react';
import * as styles from './spinner.scss';
import classNames from 'classnames';

/**
 * Renders Spinner
 */
const Spinner: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames(styles.spinner, className)}>
      <div className={styles.spinnerContainer} />
    </div>
  );
};

export { Spinner };
