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

  console.log(products);
  const total = products
    ?.map(product => ({
      price: product.price,
      amount: selectedProducts.find(one => one.path == product.id)?.quantity
    }))
    ?.reduce((acc, cur) => acc + cur.price * cur.amount, 0);

  return { addedProduct, total };
};

export { useCartNotifierData };
