type Pricing = {
  quantityBehavior: string;
  quantityDefault: number;
  price: any;
  dateLimitsEnabled: boolean;
  cancellation: {
    interval: string;
    intervalLength: number;
  };
};

export { Pricing };
