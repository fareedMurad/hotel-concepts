import * as React from 'react';
import { NavigationProps } from './navigation.props';
import * as styles from './navigation.scss';
import { useNavigationData } from './navigation.hook';
import { NavLink } from 'react-router-dom';

/**
 * Renders Navigation
 */
const Navigation: React.FC<NavigationProps> = ({}) => {
  const { navLinks } = useNavigationData();
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        {navLinks.map(el => {
          return (
            // <div key={el.number} className={styles.navigationLink}>
            <NavLink
              to={el.to}
              activeClassName={styles.activeLink}
              className={styles.navigationLink}
            >
              <div>{el.number}</div>
              <div>{el.link}</div>
            </NavLink>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export { Navigation };
