import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';
/*
 * Cart Notifier hook
 */

const useCartNotifierData = () => {
  const { addedProduct } = useSelector((state: State) => state.cart);

  return { addedProduct };
};

export { useCartNotifierData };
