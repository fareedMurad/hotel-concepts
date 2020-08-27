/**
 * Props
 */
type ProductBannerProps = {
  product: {
    name: string;
    details: string;
    authors: {
      name: string;
      position: string;
      picture: string;
      description: string;
    }[];
    bookCategory: string;
    productImage: string;
    languages: string[];
    price: string;
    publishDate: string;
    description: string;
  };
};

export { ProductBannerProps };
