import * as React from 'react';
import { useState } from 'react';
import { useBurgerData } from './burger.hook';
import * as styles from './burger.scss';
import { BurgerItem } from '../burger-item';
import { Button } from '@core/components/button';
import { navigate } from '@router/store';
import { useDispatch } from 'react-redux';
import { animated } from 'react-spring';

/**
 * Renders Burger
 */
const Burger: React.FC<any> = ({ transition }) => {
  const { menus, authorized } = useBurgerData();
  const [showMenu, setShowMenu] = useState('');

  const dispatch = useDispatch();
  return (
    <animated.div style={transition} className={styles.burger}>
      {!authorized && (
        <Button
          className={styles.button}
          arrow
          onClick={() => dispatch(navigate('/auth/login'))}
        >
          Log in
        </Button>
      )}
      {menus.map(el => (
        <BurgerItem
          key={el.title}
          title={el.title}
          menuLinks={el.menuLinks}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      ))}

      <div
        className={styles.link}
        onClick={() => dispatch(navigate('/contributors'))}
      >
        Mentors & Co-authors
      </div>
      <div
        className={styles.link}
        onClick={() => dispatch(navigate('/insights'))}
      >
        Insights
      </div>
      <div
        className={styles.link}
        onClick={() => dispatch(navigate('/contact-us'))}
      >
        Contact
      </div>
    </animated.div>
  );
};

export { Burger };
