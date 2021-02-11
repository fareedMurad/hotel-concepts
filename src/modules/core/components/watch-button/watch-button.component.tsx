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
  onLeave,
  theme = 'primary'
}) => {
  return (
    <div className={classNames(styles.watchButton, className)}>
      <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div
          className={classNames(styles.buttonPlay, {
            [styles.buttonPlaySecondary]: theme === 'secondary'
          })}
        >
          <div
            className={classNames(styles.buttonPlayIcon, {
              [styles.buttonPlayIconSecondary]: theme === 'secondary'
            })}
          />
        </div>
      </div>
      <div
        className={classNames(styles.container, {
          [styles.containerSecondary]: theme === 'secondary'
        })}
      >
        <span>{titleText}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export { WatchButton };
