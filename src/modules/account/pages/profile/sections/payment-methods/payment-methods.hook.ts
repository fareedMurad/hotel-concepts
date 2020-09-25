import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const usePaymentMethodsData = () => {
  const { user } = useSelector((state: State) => state.auth);

  const defaultValues = {
    card: false,
    paypal: false,
    transfer: false
  };

  return { user, defaultValues: user?.paymentMethods || defaultValues };
};

export { usePaymentMethodsData };
