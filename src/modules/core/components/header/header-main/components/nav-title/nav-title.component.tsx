import * as React from 'react';
import { NavTitleProps } from './nav-title.props';
import * as styles from './nav-title.scss';
import classNames from 'classnames';
import { Icon } from '@core/components';
import { useHeaderMainData } from '../../hooks';

/**
 * Renders NavTitle
 */
const NavTitle: React.FC<NavTitleProps> = ({ className, title }) => {
  const { whiteHeader, stickyHeader } = useHeaderMainData();
  const blackTheme = whiteHeader || stickyHeader;

  return (
    <div className={classNames(className, styles.navTitle)}>
      {title}{' '}
      <Icon
        className={classNames(styles.shape)}
        name={blackTheme ? 'triangle-arr-b' : 'triangle-arr'}
      />
    </div>
  );
};

export { NavTitle };
