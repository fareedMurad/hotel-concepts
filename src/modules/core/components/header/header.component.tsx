import * as React from 'react';
import { HeaderProps } from './header.props';
import * as styles from './header.scss';

/**
 * Renders Header
 */
const Header: React.FC<HeaderProps> = ({ whiteBackground }) => {
  return (
    <React.Fragment>
      <div className={styles.header}></div>
    </React.Fragment>
  );
};

export { Header };
