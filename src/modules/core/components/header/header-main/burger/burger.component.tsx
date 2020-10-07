import { unauthorize } from '@app/redux/auth';
import { Button } from '@core/components/button';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { animated, useTransition } from 'react-spring';
import { useBurgerData } from './burger.hook';
import { BurgerProps } from './burger.props';
import * as styles from './burger.scss';

/**
 * Render link
 */
const NavLink: React.FC<{ name: string; link: string }> = ({ name, link }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.burgerLinksLink}
      onClick={() => dispatch(navigate(link))}
    >
      {name}
    </div>
  );
};

/**
 * Renders Burger
 */
const Burger: React.FC<BurgerProps> = ({ showBurger }) => {
  const { links, authorized, accountLinks } = useBurgerData();
  const dispatch = useDispatch();
  const transition = useTransition(showBurger, null, {
    from: { transform: `translate3d(100%,0,0)` },
    enter: { transform: `translate3d(0,0,0)` },
    leave: { transform: `translate3d(100%,0,0)` }
  });
  const handleBtnClick = () => {
    if (authorized) {
      dispatch(unauthorize());
    } else {
      dispatch(navigate('/auth/login'));
    }
  };

  return (
    <React.Fragment>
      {transition.map(({ item, key, props }) => {
        return (
          item && (
            <animated.div style={props} className={styles.burger}>
              <div className={styles.burgerAccount}>
                {!authorized ? (
                  <Button
                    onClick={() => handleBtnClick()}
                    className={styles.button}
                  >
                    Log in
                  </Button>
                ) : (
                  <React.Fragment>
                    {accountLinks.map(el => (
                      <NavLink key={el.name} name={el.name} link={el.link} />
                    ))}
                    <Button
                      onClick={() => handleBtnClick()}
                      className={styles.button}
                    >
                      Log out
                    </Button>
                  </React.Fragment>
                )}
              </div>
              <div className={styles.burgerLinks}>
                {links.map(el => (
                  <NavLink key={el.name} name={el.name} link={el.link} />
                ))}
              </div>
            </animated.div>
          )
        );
      })}
    </React.Fragment>
  );
};

export { Burger };
