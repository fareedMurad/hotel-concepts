import { unauthorize } from '@app/redux/auth';
import { Button } from '@core/components';
import { Icon } from '@core/components/icon';
import { useClickOutside } from '@core/shared';
import { navigate } from '@router/store';
import classNames from 'classnames';
import * as React from 'react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CardDropdown } from '../../components/card-dropdown';
import { useProfileMenuData } from './profile-menu.hook';
import { ProfileMenuProps } from './profile-menu.props';
import * as styles from './profile-menu.scss';

/**
 * Renders ProfileMenu
 */
const ProfileMenu: React.FC<ProfileMenuProps> = ({ blackTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { links, authorized, user } = useProfileMenuData();
  const dispatch = useDispatch();
  const ref = useRef();
  useClickOutside(ref, () => setShowMenu(false));

  return (
    <div
      className={styles.profileMenu}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      ref={ref}
    >
      <Icon name={blackTheme ? 'default-avatar-b' : 'default-avatar'} />

      {showMenu && (
        <CardDropdown className={styles.dropdown}>
          {authorized ? (
            <div className={styles.userName}>
              Hello, {user.name} {user.surname}
            </div>
          ) : (
            <React.Fragment>
              <Button
                className={styles.button}
                width={'100%'}
                onClick={() => {
                  dispatch(navigate('/auth/login'));
                }}
              >
                Sign in
              </Button>
              <Button
                className={classNames(styles.button, styles.createAcc)}
                width={'100%'}
                onClick={() => {
                  dispatch(navigate('/auth/register'));
                }}
              >
                Create an account
              </Button>
            </React.Fragment>
          )}
          {links.map(({ to, title }) => (
            <NavLink
              className={styles.link}
              key={title}
              to={to}
              onClick={
                () => {}
                // !authorized && dispatch(showModal(Modals.registration))
              }
            >
              {title}
            </NavLink>
          ))}
          {authorized && (
            <Button
              className={styles.logout}
              onClick={() => {
                dispatch(unauthorize());
              }}
            >
              Log out
            </Button>
          )}
        </CardDropdown>
      )}
    </div>
  );
};

export { ProfileMenu };
