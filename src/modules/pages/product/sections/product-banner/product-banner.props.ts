/**
 * Props
 */
type ProductBannerProps = {
  product: {
    name: string;
    details: string;
    authorsCollection: {
      items: { name }[];
    };
    bookCategory: string;
    productImage: {
      url: string;
    };
    languages: string[];
    price: string;
    publishDate: string;
    description: string;
  };
};

export { ProductBannerProps };
