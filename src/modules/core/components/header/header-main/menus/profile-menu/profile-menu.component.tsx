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

/**
 * Renders ProfileMenu
 */
const ProfileMenu: React.FC<ProfileMenuProps> = ({ setSelectedMenu }) => {
  const { authorized } = useSelector((state: State) => state.auth);
  const { links } = useProfileMenuData();
  const dispatch = useDispatch();

  if (!authorized)
    return (
      <div
        className={styles.profileMenu}
        onMouseLeave={() => setSelectedMenu('')}
      >
        <Button
          width={'100%'}
          onClick={() => {
            dispatch(navigate('/auth/login'));
          }}
        >
          Log in
        </Button>
      </div>
    );

  return (
    <div
      className={styles.profileMenu}
      onMouseLeave={() => setSelectedMenu('')}
    >
      {links.map(link => (
        <NavLink key={link.title} to={link.to}>
          {link.title}
        </NavLink>
      ))}
      <Button
        className={styles.logout}
        onClick={() => {
          dispatch(unauthorize());
        }}
      >
        Log out
      </Button>
    </div>
  );
};

export { ProfileMenu };
