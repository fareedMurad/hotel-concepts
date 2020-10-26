import * as React from 'react';
import { BurgerItemProps } from './burger-item.props';
import * as styles from './burger-item.scss';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';

/**
 * Menu item
 */
const MenuItem: React.FC<{ link: string; to: string }> = ({ link, to }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.menuItem} onClick={() => dispatch(navigate(to))}>
      <div className={styles.menuItemTitle}>{link}</div>
    </div>
  );
};

/**
 * Renders BurgerItem
 */
const BurgerItem: React.FC<BurgerItemProps> = ({
  title,
  menuLinks,
  showMenu,
  setShowMenu
}) => (
  <div className={styles.burgerItem}>
    <div
      className={styles.title}
      onClick={() => setShowMenu(showMenu === title ? '' : title)}
    >
      <div>{title}</div>
      <div className={styles.titleIndicator}>
        {showMenu === title ? '-' : '+'}
      </div>
    </div>
    {showMenu === title && (
      <div className={styles.menu}>
        {menuLinks.map(el => (
          <MenuItem key={el.link} link={el.link} to={el.to} />
        ))}
      </div>
    )}
  </div>
);

export { BurgerItem };
