/*
 * Product model
 */

type ProductModel = {
  name: string;
  price: string;
  languages: string;
  details: string;
  bookCategory?: string;
  previewPagesCollection?: {
    items: {
      url;
      sys: {
        id;
      };
    }[];
  };
  publishDate: string;
  productImagesCollection: {
    items: {
      url;
    }[];
  };
  authorsCollection: {
    items: { name }[];
  };
};

export { ProductModel };
