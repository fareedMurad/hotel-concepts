import * as React from 'react';
import { AvatarProps } from './avatar.props';
import * as styles from './avatar.scss';
import classNames from 'classnames';

/**
 * Renders Avatar
 */
const Avatar: React.FC<AvatarProps> = ({
  width,
  name,
  surname,
  height,
  avatar,
  className,
  children
}) => {
  return (
    <div
      className={classNames(styles.defaultAvatar, className, {
        [styles.avatar]: avatar
      })}
      style={{
        width: width,
        height: height,
        background: !avatar ? '#ff6634' : `url(${avatar})`
      }}
    >
      {children}
      {!avatar && (
        <div className={styles.initials}>
          {name && name[0]}
          {surname && surname[0]}
        </div>
      )}
    </div>
  );
};

Avatar.defaultProps = {
  width: 34,
  height: 34
};
export { Avatar };
