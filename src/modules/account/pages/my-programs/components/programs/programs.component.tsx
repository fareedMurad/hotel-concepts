import {
  addProgramToWishlist,
  removeProgramFromWishlist
} from '@app/redux/account';
import { addProductToCart } from '@app/redux/cart';
import { State } from '@app/redux/state';
import { Button, Icon } from '@core/components';
import { navigate } from '@router/store';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProgramProps, ProgramsProps } from './programs.props';
import * as styles from './programs.scss';

/**
 * Renders single Program
 */
const Program: React.FC<ProgramProps> = ({ type, program, inCart }) => {
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
    courseImage: {
      file: { url }
    }
  } = program || {};

  const {
    general: {
      browserVersion: { name: browserName, version }
    }
  } = useSelector((state: State) => state);

  const oldSafari = browserName === 'Safari' && version <= '14';
  const imageSrc = oldSafari
    ? `${url}?h=500&w=900`
    : `${url}?q=80&fm=webp&h=500&w=900`;

  return (
    <div className={styles.program}>
      {fromWishlist && (
        <Icon
          className={styles.like}
          name='heart'
          onClick={e => {
            e.stopPropagation();
            dispatch(
              removeProgramFromWishlist({
                id,
                preloader: Preloaders.programsWishlist
              })
            );
          }}
        />
      )}
      <img className={styles.image} src={`${imageSrc}`} alt={url} />
      <div className={styles.container}>
        <div className={styles.complexity}>{complexityLevel}</div>
        <Link className={styles.title} to={`/program/?programId=${id}`}>
          {name}
        </Link>
        <div className={styles.meta}>
          <div>{weeks} weeks</div>
          <div className={styles.metaSprints}>{sprints} sprints</div>
          <div>{price}$</div>
        </div>
        <div className={styles.box}>
          <div className={styles.description}>{description}</div>
          {fromWishlist ? (
            inCart ? (
              <Button disabled>Is in cart</Button>
            ) : (
              <Button
                className={styles.control}
                arrow
                onClick={e => {
                  e.stopPropagation();
                  dispatch(addProductToCart({ path: id, quantity: 1 }));
                }}
              >
                Add to cart
              </Button>
            )
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
  const {
    cart: { selectedProducts }
  } = useSelector((state: State) => state);
  const fromWishlist = type == 'wishlist';
  const { items, total } = data || {};

  return total > 0 ? (
    <div className={classNames(styles.programs, className)}>
      {items.map(program => {
        const match = selectedProducts?.some(one => one.path == program.id);

        return (
          <Program
            type={type}
            program={program}
            inCart={match}
            key={program?.id}
          />
        );
      })}
    </div>
  ) : (
    <div className={styles.placeholder}>
      Your Programs {fromWishlist ? 'Wishlist' : 'Purchased list'} is empty.
      Start adding some.
    </div>
  );
};

export { Programs };
