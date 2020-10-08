import {
  addProgramToWishlist,
  removeProgramFromWishlist
} from '@app/redux/account';
import { cart } from '@app/redux/cart';
import { Button, Icon } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ProgramProps, ProgramsProps } from './programs.props';
import * as styles from './programs.scss';

/**
 * Renders single Program
 */
const Program: React.FC<ProgramProps> = ({ type, program }) => {
  const dispatch = useDispatch();
  const fromWishlist = type == 'wishlist';
  const {
    id,
    name,
    description,
    complexityLevel,
    price,
    weeks,
    sprints,
    heroImage: {
      file: { url }
    }
  } = program || {};

  return (
    <div className={styles.program}>
      {fromWishlist && (
        <Icon
          className={styles.like}
          name='heart'
          onClick={() =>
            dispatch(
              removeProgramFromWishlist({
                id,
                preloader: Preloaders.programsWishlist
              })
            )
          }
        />
      )}
      <img className={styles.image} src={url} alt={url} />
      <div className={styles.container}>
        <div className={styles.complexity}>{complexityLevel}</div>
        <div className={styles.title}>{name}</div>
        <div className={styles.meta}>
          <div>{weeks} weeks</div>
          <div className={styles.metaSprints}>{sprints} sprints</div>
          <div>{price}$</div>
        </div>
        <div className={styles.box}>
          <div className={styles.description}>{description}</div>
          {fromWishlist ? (
            <Button
              className={styles.control}
              arrow
              onClick={() => dispatch(cart.add({ path: id, quantity: 1 }))}
            >
              Add to cart
            </Button>
          ) : (
            <Button className={styles.control} arrow>
              Access program
            </Button>
          )}
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
