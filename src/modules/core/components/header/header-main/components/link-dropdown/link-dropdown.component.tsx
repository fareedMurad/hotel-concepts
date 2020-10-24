import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { LinkDropdownProps } from './link-dropdown.props';
import * as styles from './link-dropdown.scss';
import classNames from 'classnames';

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
  return (
    <div className={classNames(className, styles.link)} onClick={onClick}>
      <div className={styles.link} onClick={() => dispatch(navigate(to))}>
        <div className={styles.linkTitle}>
          {link} <span>&#8594;</span>
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
