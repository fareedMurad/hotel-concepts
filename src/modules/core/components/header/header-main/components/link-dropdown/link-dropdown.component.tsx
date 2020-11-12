import * as React from 'react';
import * as styles from './link-dropdown.scss';
import { Icon } from '@core/components';
import { LinkDropdownProps } from './link-dropdown.props';
import classNames from 'classnames';
import { navigate } from '@router/store';
import { useDispatch } from 'react-redux';

/**
 * Renders LinkDropdown
 */
const LinkDropdown: React.FC<LinkDropdownProps> = ({
  className,
  link,
  image,
  to,
  onClick
}) => {
  const dispatch = useDispatch();
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className={classNames(className, styles.link)}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={styles.link}
        onClick={() => {
          // #non-clickable temp solution
          if (!to) {
            return;
          }
          dispatch(navigate(to));
        }}
      >
        <div className={styles.linkTitle}>
          <div>{link}</div>{' '}
          <Icon name={'arrows/arrow-right-primary'} className={styles.arrow} />
        </div>
        <div
          className={styles.linkImage}
          //hardcoded image
          style={{
            backgroundImage: `url(${
              image ? image : require('img/header-image.png')
            })`
          }}
        />
      </div>
    </div>
  );
};

export { LinkDropdown };
