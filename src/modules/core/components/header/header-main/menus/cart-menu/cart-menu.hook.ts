import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';
/*
 * Cart menu hook
 */

const useCartMenuData = () => {
  const { addedProduct } = useSelector((state: State) => state.cart);

  return { addedProduct };
};

export { useCartMenuData };
