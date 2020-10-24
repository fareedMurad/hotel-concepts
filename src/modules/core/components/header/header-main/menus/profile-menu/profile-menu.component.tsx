import * as React from 'react';
import { ProfileMenuProps } from './profile-menu.props';
import * as styles from './profile-menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { unauthorize } from '@app/redux/auth';
import { NavLink } from 'react-router-dom';
import { Button } from '@core/components';
import { useProfileMenuData } from './profile-menu.hook';
import { State } from '@app/redux/state';
import { navigate } from '@router/store';
import { useClickOutside } from '@core/shared';
import { showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import classNames from 'classnames';

/**
 * Renders ProfileMenu
 */
const ProfileMenu: React.FC<ProfileMenuProps> = ({ setSelectedMenu }) => {
  const { links, authorized, user } = useProfileMenuData();
  const dispatch = useDispatch();

  return (
    <div
      className={styles.profileMenu}
      onMouseLeave={() => setSelectedMenu('')}
    >
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
      {links.map(link => (
        <NavLink
          className={styles.link}
          key={link.title}
          to={link.to}
          onClick={
            () => {}
            // !authorized && dispatch(showModal(Modals.registration))
          }
        >
          {link.title}
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
    </div>
  );
};

export { ProfileMenu };
