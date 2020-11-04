import { ContentType } from '@account/pages/library/models';
import { Button } from '@core/components';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { animated } from 'react-spring';
import { useCartNotifierData } from './cart-notifier.hook';
import * as styles from './cart-notifier.scss';
import classNames from 'classnames';
import { useRef } from 'react';
import { useClickOutside } from '@core/shared';
import { cart } from '@app/redux/cart';

/**
 * Render Cart notifier item
 */
const CartNotifierItem: React.FC = () => {
  const { addedProduct } = useCartNotifierData();
  const {
    product: { name, authors, price, __typename, courseImage, productImage }
  } = addedProduct || {};
  const isBook = __typename == ContentType.product;
  const url = productImage?.file?.url;
  const programImage = courseImage?.file?.url;

  return (
    <div className={styles.item}>
      <img className={styles.itemImage} src={isBook ? url : programImage} />
      <div className={styles.description}>
        <div className={styles.descriptionName}>{name}</div>
        <div className={styles.descriptionPrice}>${price}</div>
      </div>
    </div>
  );
};

/**
 * Renders CartNotifier
 */
const CartNotifier: React.FC<any> = ({ transition, isClicked }) => {
  const { total } = useCartNotifierData();
  const dispatch = useDispatch();
  const ref = useRef();

  useClickOutside(ref, () => {
    dispatch(cart.removeCurrent());
  });

  const navigateToCartPage = () => dispatch(navigate('/cart'));

  return (
    <animated.div style={transition} className={styles.cartNotifier} ref={ref}>
      <div
        className={classNames(styles.title, {
          [styles.withBackground]: isClicked
        })}
      >
        Just added to your cart
      </div>
      <CartNotifierItem />
      <div className={styles.cartNotifierFooter}>
        {isClicked && (
          <div className={styles.cartNotifierTotal}>
            <span>ORDER TOTAL: </span> <span>${total}</span>
          </div>
        )}
        <Button className={styles.submit} arrow onClick={navigateToCartPage}>
          Checkout
        </Button>
        {isClicked && (
          <div className={styles.hint} onClick={navigateToCartPage}>
            View Shopping Cart for more options
          </div>
        )}
      </div>
    </animated.div>
  );
};

export { CartNotifier };
