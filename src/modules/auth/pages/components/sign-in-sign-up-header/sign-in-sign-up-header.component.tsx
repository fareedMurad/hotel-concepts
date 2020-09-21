import * as React from 'react';
import { SignInSignUpHeaderProps } from './sign-in-sign-up-header.props';
import * as styles from './sign-in-sign-up-header.scss';
import { NavLink } from 'react-router-dom';
import { Sso } from '@auth/components';

/**
 * Renders SignInSignUpHeader
 */
const SignInSignUpHeader: React.FC<SignInSignUpHeaderProps> = ({ title }) => {
  return (
    <div className={styles.signInSignUpHeader}>
      <div className={styles.titles}>
        <NavLink activeClassName={styles.titlesActive} to={'/auth/register'}>
          Sign up
        </NavLink>
        <NavLink activeClassName={styles.titlesActive} to={'/auth/login'}>
          Sign in
        </NavLink>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionSubtitle}>{title}</div>
        <div className={styles.descriptionText}>
          Build skills for today, tomorrow, and beyond. Education to
          future-proof your career.
        </div>
      </div>
      <Sso className={styles.socials} />
      <div className={styles.separator}>
        <span className={styles.separatorLine} /> <span>Or</span>
        <span className={styles.line} />
      </div>
    </div>
  );
};

export { SignInSignUpHeader };
