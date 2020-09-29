/**
 * Subscription model
 */
type SubscriptionModel = {
  time: {
    period: string;
    expires: string;
  };
  benefits: { caption: string; description: string }[];
};

export { SubscriptionModel };
