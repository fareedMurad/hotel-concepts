import * as React from 'react';
import { WatchButtonProps } from './watch-button.props';
import * as styles from './watch-button.scss';
import classNames from 'classnames';

/**
 * Renders WatchButton
 */
const WatchButton: React.FC<WatchButtonProps> = ({
  time,
  titleText,
  className,
  onEnter,
  onLeave
}) => {
  return (
    <div className={classNames(styles.watchButton, className)}>
      <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div className={styles.buttonPlay}>
          <div className={styles.buttonPlayIcon} />
        </div>
      </div>
      <div className={styles.container}>
        <span>{titleText}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export { WatchButton };
