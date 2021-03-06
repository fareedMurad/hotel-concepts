import * as React from 'react';
import * as styles from './auth-header.scss';
import { AuthHeaderProps } from './auth-header.props';
import { NavLink } from 'react-router-dom';
import { Sso } from '../sso';
import classNames from 'classnames';
import { useAuthHeaderData } from './auth-header.hook';

/**
 * Renders AuthHeader
 */
const AuthHeader: React.FC<AuthHeaderProps> = ({ className }) => {
  const { isLogin } = useAuthHeaderData();

  return (
    <div className={classNames(styles.authHeader, className)}>
      <div className={styles.header}>
        <NavLink
          to='/auth/register'
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Register
        </NavLink>
        <NavLink
          to='/auth/login'
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Log in
        </NavLink>
      </div>
      <div className={styles.title}>
        {isLogin ? 'Log in to your account' : 'Create your account'}
      </div>
      <div className={styles.description}>
        Build skills for today, tomorrow, and beyond. Education to future-proof
        your career.
      </div>
      <Sso className={styles.socials} usersAction={isLogin} />
      <div className={styles.separator}>
        <span className={styles.separatorLine} />
        <span className={styles.separatorCaption}>Or</span>
        <span className={styles.separatorLine} />
      </div>
    </div>
  );
};

export { AuthHeader };
