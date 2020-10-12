/**
 * User model
 */
type User = {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  language: string;
  fsId: string;
  interests: { label: string; value: string }[];
  title: string;
  country: string;
  city: string;
  company: string;
  job: string;
  phone: string;
  email: string;
  verified: boolean;
  source: string;
  position: string;
  newsSub: boolean;
  subscriptionId: string;
  subscriptionStatus: boolean;
  paymentMethods: {
    paypal: boolean;
    card: boolean;
    transfer: boolean;
  };
};

export { User };
