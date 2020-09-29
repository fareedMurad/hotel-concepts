import { addProgramToWishlist } from '@app/redux/account';
import { Button } from '@core/components';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ProgramProps, ProgramsProps } from './programs.props';
import * as styles from './programs.scss';

/**
 * Renders single Program
 */
const Program: React.FC<ProgramProps> = ({ type, program }) => {
  const fromWishlist = type == 'wishlist';
  const {
    name,
    complexityLevel,
    heroImage: {
      file: { url }
    }
  } = program || {};

  console.log(program);

  return (
    <div className={styles.program}>
      <img className={styles.image} src={url} alt={url} />
      <div className={styles.container}>
        <div className={styles.complexity}>{complexityLevel}</div>
        <div className={styles.title}>{name}</div>
        <div className={styles.meta}>
          <div>weeks</div>
          <div className={styles.metaSprints}>sprints</div>
          <div>price$</div>
        </div>
        <div className={styles.box}>
          <div className={styles.description}>{'description'}</div>
          <Button className={styles.add} arrow>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

/**
 * Renders Programs
 */
const Programs: React.FC<ProgramsProps> = ({ className, type, data }) => {
  const fromWishlist = type == 'wishlist';
  const { items, total } = data || {};
  const dispatch = useDispatch();

  return total > 0 ? (
    <div className={classNames(styles.programs, className)}>
      {/* <div
        onClick={() => dispatch(addProgramToWishlist('2t3zkLkhDJp5sM72ZvzBku'))}
      >
        add
      </div> */}
      {items.map(program => (
        <Program type={type} program={program} key={program?.id} />
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
