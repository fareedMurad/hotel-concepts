/*
 * Payment methods
 */

type PaymentMethodsModel = {
  paymentMethods: {
    card: boolean;
    transfer: boolean;
    paypal: boolean;
  };
};

export { PaymentMethodsModel };
