import * as React from 'react';
import { BurgerItemProps } from './burger-item.props';
import * as styles from './burger-item.scss';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import classNames from 'classnames';
import { Icon } from '@core/components';
import { useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';

import useMeasure from 'react-use-measure';
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
      {highlighted && (
        <Icon name='arrows/arrow-right-primary' className={styles.arrow} />
      )}
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
  setShowMenu,
  height
}) => {
  /**
   * animation
   */

  const expand = useSpring({
    from: { height: 68 },
    to: { height: showMenu === title ? height : 68 }
  });

  return (
    <animated.div style={expand} className={styles.burgerItem}>
      <div
        className={styles.title}
        onClick={() =>
          menuLinks && setShowMenu(showMenu === title ? '' : title)
        }
      >
        <div className={showMenu === title && styles.active}>{title}</div>
        <div className={styles.titleIndicator}>
          {menuLinks ? (showMenu === title ? '-' : '+') : null}
        </div>
      </div>

      {menuLinks && showMenu === title && (
        <div className={styles.menu}>
          {menuLinks.map(el => (
            <MenuItem
              key={el.link}
              // #non-clickable
              link={el.link}
              to={title === 'Corporate solutions' ? '/' : el.to}
              highlighted={el.highlighted}
            />
          ))}
        </div>
      )}
    </animated.div>
  );
};

export { BurgerItem };
