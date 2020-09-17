import * as React from 'react';
import { AddToWishProps } from './add-to-wish.props';
import * as styles from './add-to-wish.scss';
import { Icon } from '../icon';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

/**
 * Renders AddToWish
 */
const AddToWish: React.FC<AddToWishProps> = ({
  className,
  onClick,
  selected
}) => {
  const dispatch = useDispatch();
  return (
    <div className={classNames(styles.addToWish, className)} onClick={onClick}>
      <Icon name='heart' fill={selected && '#ff6634'} />
    </div>
  );
};

export { AddToWish };
