import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const usePaymentMethodsData = () => {
  const { user } = useSelector((state: State) => state.auth);

  return { user };
};

export { usePaymentMethodsData };
