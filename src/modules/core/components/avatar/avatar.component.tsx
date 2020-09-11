import * as React from 'react';
import { AvatarProps } from './avatar.props';
import * as styles from './avatar.scss';
import classNames from 'classnames';

/**
 * Renders Avatar
 */
const Avatar: React.FC<AvatarProps> = ({ size, user, className, children }) => {
  const { name, surname, src } = user || {};

  return (
    <div
      className={classNames(styles.defaultAvatar, className, {
        [styles.avatar]: src
      })}
      style={{
        width: size,
        height: size,
        background: !src ? '#ff6634' : `url(${src})`
      }}
    >
      {children}
      {!src && (
        <div className={styles.initials}>
          {name && name[0]}
          {surname && surname[0]}
        </div>
      )}
    </div>
  );
};

/**
 * Default props
 */
Avatar.defaultProps = {
  size: 50
};

export { Avatar };
