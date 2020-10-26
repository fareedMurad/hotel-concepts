import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CardDropdown, NavTitle } from '../../components';
import { useAboutMenuData } from './about-menu.hook';
import { AboutMenuProps } from './about-menu.props';
import * as styles from './about-menu.scss';

/**
 * Renders AboutMenu
 */
const AboutMenu: React.FC<AboutMenuProps> = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { navigation } = useAboutMenuData();

  return (
    <div
      className={styles.aboutMenu}
      onMouseOver={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <NavTitle className={className} title='About' />
      {showMenu && (
        <CardDropdown
          className={styles.dropdown}
          onMouseLeave={() => setShowMenu(false)}
        >
          {navigation.map(({ name, to }) => (
            <NavLink
              className={styles.link}
              key={name}
              to={to}
              onClick={() => setShowMenu(false)}
            >
              {name}
            </NavLink>
          ))}
        </CardDropdown>
      )}
    </div>
  );
};
export { AboutMenu };
