/**
 * Props
 */
type ProductBannerProps = {
  product: {
    name: string;
    details: string;
    authorsCollection: {
      items: { name: string; surname: string }[];
    };
    bookCategory: string;
    productImage: {
      url: string;
    };
    languages: string[];
    price: string;
    publishDate: string;
    previewDescription: string;
  };
};

export { ProductBannerProps };
