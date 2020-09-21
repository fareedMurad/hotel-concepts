import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { PaymentMethodsModel } from '@account/models/payment';

const usePaymentmethodData = () => {
  const {
    user: { paymentMethods }
  } = useSelector((state: State) => state.auth);

  const defaultValues: PaymentMethodsModel = {
    paymentMethods: {
      paypal: false,
      transfer: false,
      card: false
    }
  };

  return { defaultValues };
};

export { usePaymentmethodData };
