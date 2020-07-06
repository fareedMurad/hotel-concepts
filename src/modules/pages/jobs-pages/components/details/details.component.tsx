import * as React from 'react';
import { DetailsProps } from './details.props';
import * as styles from './details.scss';
import { NavLink } from 'react-router-dom';

/**
 * Renders Details
 */
const Details: React.FC<DetailsProps> = ({ onClick }) => {
  return (
    <NavLink to='/' className={styles.details} onClick={onClick}>
      <div>Details</div>
      <div>&#8594;</div>
    </NavLink>
  );
};

export { Details };
