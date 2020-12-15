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
    const discountProcent = pricing.quantityDiscounts
      ? pricing.quantityDiscounts[1]
      : null;
    const { discountPrice } = usePrice(pricing?.price.USD, discountProcent);
    return {
      productId,
      price: discountPrice || pricing.price.USD
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
