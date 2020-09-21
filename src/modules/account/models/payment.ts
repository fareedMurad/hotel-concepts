/*
 * Payment methods
 */

type PaymentMethodsModel = {
  paymentMethods: {
    card: boolean;
    paypal: boolean;
    transfer: boolean;
  };
};

export { PaymentMethodsModel };
