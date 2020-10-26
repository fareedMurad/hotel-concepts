import * as React from 'react';
import { NavTitleProps } from './nav-title.props';
import * as styles from './nav-title.scss';
import classNames from 'classnames';

/**
 * Renders NavTitle
 */
const NavTitle: React.FC<NavTitleProps> = ({ className, title }) => (
  <div className={classNames(className, styles.navTitle)}>
    {title} <span className={styles.arrow}>&#x25BE;</span>
  </div>
);

export { NavTitle };
