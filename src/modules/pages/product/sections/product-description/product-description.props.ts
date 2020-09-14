/**
 * Props
 */
type ProductDescriptionProps = {
  product: {
    name: string;
    details: {
      json: any;
    };
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
    listOfSkills: string[];
    sys: {
      id: string;
    };
    pagesCount: string;
  };
};

export { ProductDescriptionProps };
