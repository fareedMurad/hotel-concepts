import classNames from 'classnames';
import * as React from 'react';
import { ProgramProps, ProgramsProps } from './programs.props';
import * as styles from './programs.scss';

/**
 * Renders single Program
 */
const Program: React.FC<ProgramProps> = ({ type }) => {
  const fromWishlist = type == 'wishlist';

  return (
    <div className={styles.program}>
      <div>Program image</div>
      <div>Program title</div>
    </div>
  );
};

/**
 * Renders Programs
 */
const Programs: React.FC<ProgramsProps> = ({ className, type, data }) => {
  const fromWishlist = type == 'wishlist';
  const { items, total } = data || {};

  return total > 0 ? (
    <div className={classNames(styles.programs, className)}>
      {items.map(index => (
        <Program type={type} key={index} />
      ))}
    </div>
  ) : (
    <div className={styles.placeholder}>
      Your Programs {fromWishlist ? 'Wishlist' : 'Purchased list'} is empty.
      Start adding some.
    </div>
  );
};

export { Programs };
