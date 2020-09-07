import * as React from 'react';
import { AuthProps } from './auth.props';
import * as styles from './auth.scss';

/**
 * Renders Auth
 */
const Auth: React.FC<AuthProps> = ({}) => {
  return <div className={styles.auth}></div>;
};

export { Auth };
