import { Pricing } from '@app/models';
import { ProductCategory as FastSpringProductCategory } from '@app/models/fastspring';

/**
 * Book model
 */
type Book = {
  id: string;
  name: string;
  isPreorder: boolean;
  preorderDate: string;
  pagesCount: number;
  previewDescription: string;
  price: number;
  pricing: Pricing;
  productCategory: ProductCategory;
  publishDate: string;
  results: string[];
  authors: BookAuthor[];
  inWishlist: boolean;
  availableFormats: string[];
  bookCategory: string;
  comments: BookComment[];
  coverPhotos: BookCoverPhotos[];
  details: BookDetails;
  forWhom: string;
  forWhomListOfPositions: string[];
  highlightsText: string[];
  languages: string;
  recommended: Book[];
  listOfSkills: string[];
  materialsIncluded: string[];
  productImage: {
    title: string;
    file: FileModel;
  };
  previewPages: {
    title: string;
    file: FileModel;
  };
  attachment: {
    title: string;
    file: FileModel;
  };
  __typename: FastSpringProductCategory;
};

/**
 * Book Author model
 */
type BookAuthor = {
  id: string;
  name: string;
  surname: string;
  from: string;
  position: string;
  experience: string;
  workAt: string;
  __typename: string;
  linkedIn: string;
  shortDescription: string;
  showMentorOnHomePage: boolean;
  slug: string;
  mentorPicture: {
    title: string;
    file: FileModel;
  };
};

/**
 * Book comment
 */
type BookComment = {
  id: string;
  name: string;
  text: string;
  companyName: string;
  photo: {
    title: string;
    file: FileModel;
  };
};

/**
 * Book cover photos
 */
type BookCoverPhotos = {
  title: string;
  file: FileModel;
};

/**
 * Book details model
 */
type BookDetails = {
  data: {};
  nodeType: string;
  content: {}[];
};

/**
 * Book pricing
 */
// type BookPricing = {
//   dateLimitsEnabled: boolean;
//   quantityBehavior: string;
//   quantityDefault: number;
//   price: {
//     USD: number;
//   };
//   cancellation: {
//     interval: string;
//     intervalLength: number;
//   };
// };

/**
 * Product category
 */
type ProductCategory = {
  id: string;
  slug: string;
  category: string;
};

/**
 * File model
 */
type FileModel = {
  contentType: string;
  fileName: string;
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
};

export { Book, BookAuthor, FileModel, BookComment, BookCoverPhotos };
