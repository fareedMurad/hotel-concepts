import * as React from 'react';
import { BurgerMenuProps } from './burger-menu.props';
import * as styles from './burger-menu.scss';
import { useMenuData } from './burger-menu.hooks';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

/**
 * Renders BurgerMenu
 */
const BurgerMenu: React.FC<BurgerMenuProps> = ({ closeMenu, isOpened }) => {
  const { mainLinks, secondaryLinks } = useMenuData();
  return (
    <div className={classNames(styles.burgerMenu, {[styles.opened]: isOpened})}>
      <div onClick={closeMenu} className={styles.blur}></div>
      <div className={styles.content}>
        <div className={styles.linksContainer}>
          {mainLinks.map((link, i) => (
            <NavLink to={link.path} key={i} className={styles.link}>
              <div className={styles.linkName}>
                {link.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className={styles.separator}></div>
        <div className={styles.secondaryContainer}>
          {secondaryLinks.map((link, i) => (
            <NavLink to={link.path} key={i} className={styles.secondaryLink}>
              <div>
                {link.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export { BurgerMenu };

{/* <div className={`Burger-menu ${activeMenu === EActiveMenuType.menu ? 'opened' : ''}`}>
<div onClick={closeMenu} className="Burger-menu__blur"></div>
<div className="Burger-menu__content">
  <div className="Burger-menu__links-container">
    {mainLinks.map((link, i) => (
      <Link to={link.path} key={i} className="Burger-menu__link">
        <div className="Burger-menu__link-name">
          {link.name}
        </div>
      </Link>
    ))}
  </div>
  <div className="separator my-3"></div>
  <div className="Burger-menu__secondary-container">
    {secondaryLinks.map((link, i) => (
      <Link to={link.path} key={i} className="Burger-menu__secondary-link">
        <div>
          {link.name}
        </div>
      </Link>
    ))}
  </div>
</div>
</div>
); */}
