import { removeProductFromCart, updateProductCart } from '@app/redux/cart';
import { usePrice } from '@core/shared/hooks/use-price';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { CartItemProps } from './cart-item.props';
import * as styles from './cart-item.scss';

/**
 * Renders CartItem
 */
const CartItem: React.FC<CartItemProps> = ({
  name,
  quantity,
  pricing,
  imageSource,
  id,
  isPreorder,
  productType
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [value, setValue] = useState(quantity.toString() || '1');

  const { discountPrice, price } = usePrice(pricing);

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={imageSource} alt='image' />
        {isPreorder && productType === 'Book' && (
          <div className={styles.banner}>PRE-ORDER</div>
        )}
        <div
          className={styles.remove}
          onClick={() => dispatch(removeProductFromCart(id))}
        >
          {t('cart.cart-item.remove')}
        </div>
      </div>
      <div className={styles.cartItemInfo}>
        <div className={styles.cartItemInfoTitle}>{name}</div>
        <div className={styles.descriptionType}>{productType}</div>
        <div className={styles.description}>
          <div className={styles.descriptionAmount}>
            {t('cart.cart-item.amount')}:
            <input
              onChange={e => {
                const {
                  target: { value }
                } = e;
                let filteredValue = value.replace(/\D+/g, '');
                if (filteredValue === '0') {
                  filteredValue = '1';
                }
                setValue(filteredValue);
                dispatch(
                  updateProductCart({
                    path: id,
                    quantity: Number(filteredValue)
                  })
                );
              }}
              type='text'
              placeholder={quantity?.toString()}
              value={value}
            />
          </div>
          <div className={styles.price}>
            <span className={discountPrice && styles.priceOld}>$ {price}</span>
            {discountPrice && (
              <span className={styles.priceNew}>$ {discountPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
