import * as React from 'react';
import { BurgerItemProps } from './burger-item.props';
import * as styles from './burger-item.scss';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import classNames from 'classnames';

/**
 * Menu item
 */
const MenuItem: React.FC<{
  link: string;
  to: string;
  highlighted?: boolean;
}> = ({ link, to, highlighted }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.menuItem} onClick={() => dispatch(navigate(to))}>
      <div
        className={classNames(styles.menuItemTitle, {
          [styles.highlighted]: highlighted
        })}
      >
        {link}
      </div>
      {highlighted && <span className={styles.arrow}>→</span>}
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
          <MenuItem
            key={el.link}
            link={el.link}
            to={el.to}
            highlighted={el.highlighted}
          />
        ))}
      </div>
    )}
  </div>
);

export { BurgerItem };
