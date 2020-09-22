/**
 * User model
 */
type User = {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  language: string;
  title: string;
  country: string;
  city: string;
  company: string;
  job: string;
  phone: string;
  email: string;
  source: string;
  position: string;
  newsSub: boolean;
  paymentMethods: {
    paypal: boolean;
    card: boolean;
    transfer: boolean;
  };
};

export { User };
