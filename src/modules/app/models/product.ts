type Pricing = {
  quantityBehavior: string;
  quantityDefault: number;
  price: {
    USD: number;
  };
  dateLimitsEnabled: boolean;
  quantityDiscounts: {
    [key: number]: number;
  };
  cancellation: {
    interval: string;
    intervalLength: number;
  };
};

type PreviewPages = {
  createdAt: string;
  file: File;
  title: string;
  updateAt: string;
};

type File = {
  contentType: string;
  details: { size: number };
  fileName: string;
  url: string;
};

export { Pricing, PreviewPages };
