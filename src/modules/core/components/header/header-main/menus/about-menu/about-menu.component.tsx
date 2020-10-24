import * as React from 'react';
import { AboutMenuProps } from './about-menu.props';
import * as styles from './about-menu.scss';
import { useAboutMenuData } from './about-menu.hook';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useState } from 'react';
import { NavTitle } from '../../components/nav-title';
import { NavLink } from 'react-router-dom';
import { CardDropdown } from '../../components/card-dropdown';

/**
 * Renders AboutMenu
 */
const AboutMenu: React.FC<AboutMenuProps> = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { aboutMenuLinks } = useAboutMenuData();

  return (
    <div
      className={styles.abouteMenu}
      onMouseOver={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <NavTitle className={className} title='About' />
      {showMenu && (
        <CardDropdown
          className={styles.dropdown}
          onMouseLeave={() => setShowMenu(false)}
        >
          {aboutMenuLinks.map(link => (
            <NavLink
              className={styles.link}
              key={link.name}
              to={link.to}
              onClick={() => setShowMenu(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </CardDropdown>
      )}
    </div>
  );
};
export { AboutMenu };
