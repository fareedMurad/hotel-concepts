import { usePrice } from '@core/shared/hooks/use-price';
import { getProducts } from '@app/redux/cart';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/*
 * Cart Notifier hook
 */
const useCartNotifierData = () => {
  const dispatch = useDispatch();
  const { addedProduct, products, selectedProducts } = useSelector(
    (state: State) => state.cart
  );

  const prices = products.map(({ pricing, id: productId }) => {
    const { discountPrice, price } = usePrice(pricing);
    return {
      productId,
      price: discountPrice || price
    };
  });

  const total = prices
    ?.map(({ price, productId }) => ({
      price,
      amount: selectedProducts.find(one => one.path == productId)?.quantity
    }))
    ?.reduce((acc, cur) => acc + cur.price * cur.amount, 0);

  return { addedProduct, total };
};

export { useCartNotifierData };
