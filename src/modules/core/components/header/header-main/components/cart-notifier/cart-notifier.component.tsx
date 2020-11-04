import { ContentType } from '@account/pages/library/models';
import { Button } from '@core/components';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { animated } from 'react-spring';
import { useCartNotifierData } from './cart-notifier.hook';
import * as styles from './cart-notifier.scss';

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
        {/* <div className={styles.descriptionAuthor}>
          {authors?.map(author => (
            <span key={author.id}>{author.name}</span>
          ))}
        </div> */}
        <div className={styles.descriptionPrice}>${price}</div>
      </div>
    </div>
  );
};

/**
 * Renders CartNotifier
 */
const CartNotifier: React.FC<any> = ({ transition, showOrderTotal }) => {
  const { total } = useCartNotifierData();
  const dispatch = useDispatch();
  console.log(total);

  const navigateToCartPage = () => dispatch(navigate('/cart'));

  return (
    <animated.div style={transition} className={styles.cartNotifier}>
      <div className={styles.title}>Just added to your cart</div>
      <CartNotifierItem />
      <div className={styles.cartNotifierFooter}>
        {showOrderTotal && (
          <div className={styles.cartNotifierTotal}>
            <span>ORDER TOTAL: </span> <span>${total}</span>
          </div>
        )}
        <Button className={styles.submit} arrow onClick={navigateToCartPage}>
          Checkout
        </Button>
        {showOrderTotal && (
          <div className={styles.hint} onClick={navigateToCartPage}>
            View Shopping Cart for more options
          </div>
        )}
      </div>
    </animated.div>
  );
};

export { CartNotifier };
