import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { LinkDropdownProps } from './link-dropdown.props';
import * as styles from './link-dropdown.scss';
import classNames from 'classnames';
import { Icon } from '@core/components';

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
      <div className={styles.link} onClick={() => dispatch(navigate(to))}>
        <div className={styles.linkTitle}>
          <div>{link}</div>{' '}
          <Icon name={'arrows/arrow-right-primary'} className={styles.arrow} />
        </div>
        <div
          className={styles.linkImage}
          //hardcoded image
          style={{ backgroundImage: `url(${require('img/header-image.png')})` }}
        />
      </div>
    </div>
  );
};

export { LinkDropdown };
