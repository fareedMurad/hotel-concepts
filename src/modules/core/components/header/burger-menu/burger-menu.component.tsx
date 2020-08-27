import * as React from 'react';
import { BurgerMenuProps } from './burger-menu.props';
import * as styles from './burger-menu.scss';
import { useMenuData } from './burger-menu.hooks';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

/**
 * Renders BurgerMenu
 */
const BurgerMenu: React.FC<BurgerMenuProps> = ({
  closeMenu,
  isOpened,
  onClick
}) => {
  // const { mainLinks, secondaryLinks } = useMenuData();
  const [isFullHide, setFullHide] = React.useState(true);

  React.useEffect(() => {
    if (isOpened) {
      setFullHide(false);
      return;
    }
    const timeout = setTimeout(() => {
      setFullHide(true);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [isOpened]);

  return (
    <div
      className={classNames(styles.burgerMenu, {
        [styles.opened]: isOpened,
        [styles.hidden]: isFullHide
      })}
    >
      <div onClick={closeMenu} className={styles.blur} />
      <div className={styles.content}>
        <div className={styles.linksContainer}>
          {/* {mainLinks.map((link, i) => (
            <NavLink to={link.path} key={i} className={styles.link}>
              <div className={styles.linkName}>{link.name}</div>
            </NavLink>
          ))} */}
          <NavLink to='/' className={styles.link}>
            <div className={styles.linkName}>Home</div>
          </NavLink>
          <div
            onClick={onClick}
            className={styles.link}
            style={{ margin: 0, cursor: 'pointer' }}
          >
            <div className={styles.linkName}>Online Programs</div>
          </div>
          <NavLink to='/insights' className={styles.link}>
            <div className={styles.linkName}>Insights</div>
          </NavLink>
        </div>
        <div className={styles.separator} />
        <div className={styles.secondaryContainer}>
          {/* {secondaryLinks.map((link, i) => (
            <NavLink to={link.path} key={i} className={styles.secondaryLink}>
              <div>{link.name}</div>
            </NavLink>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export { BurgerMenu };
