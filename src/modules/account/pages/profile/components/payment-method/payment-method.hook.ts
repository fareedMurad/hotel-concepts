import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { PaymentMethodsModel } from '@account/models/payment';

const usePaymentmethodData = () => {
  const {
    user: { paymentMethods }
  } = useSelector((state: State) => state.auth);

  const defaultValues: PaymentMethodsModel = {
    paypal: paymentMethods.paypal,
    transfer: paymentMethods.transfer,
    card: paymentMethods.card
  };

  return { defaultValues };
};

export { usePaymentmethodData };
