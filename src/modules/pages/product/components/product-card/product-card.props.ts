/**
 * Props
 */
type ProductCardProps = {
  product: {
    name: string;
    details: string;
    highlightsText: string[];
    authorsCollection: {
      items: {
        surname: string;
        name: string;
        position: string;
        picture: string;
        description: string;
      }[];
    };

    bookCategory: string;
    productImage: string;
    languages: string[];
    price: string;
    publishDate: string;
    previewDescription: string;
  };
};

export { ProductCardProps };
