import { RegistrationModal } from '@auth/modals/registration-modal';
import { Preloader } from '@core/components';
import { showModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import * as React from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useCartData } from './cart.hook';
import * as styles from './cart.scss';
import { CartItem, Summary } from './components';

/**
 * Renders Cart
 */
const Cart: React.FC = () => {
  const { products, summaryData } = useCartData();
  const cartQuantity = products?.length;

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <div className={styles.headerCaption}>My cart</div>
        {cartQuantity && (
          <div className={styles.headerQuantity}>{cartQuantity} items</div>
        )}
      </div>

      <div className={styles.container}>
        <Preloader id={Preloaders.cart}>
          {cartQuantity > 0 ? (
            <Fragment>
              <div className={styles.content}>
                <div className={styles.products}>
                  {products?.map(product => (
                    <CartItem key={product.id} {...product} />
                  ))}
                </div>
                <div className={styles.hr} />
                <Summary summaryData={summaryData} />
              </div>
              <div className={styles.alternatives}>
                <div className={styles.divider}>
                  <span className={styles.dividerLine} />
                  <div className={styles.dividerCaption}>Or checkout with</div>
                  <span className={styles.dividerLine} />
                </div>
                <div>Paypal</div>
                <div>Visa checkout</div>
              </div>
            </Fragment>
          ) : (
            <div className={styles.placeholder}>Your cart is empty</div>
          )}
        </Preloader>
        <RegistrationModal />
      </div>
    </div>
  );
};

export { Cart };
