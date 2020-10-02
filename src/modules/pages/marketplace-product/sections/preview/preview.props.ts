import { BookAuthor } from '@account/pages/library/models';

/**
 * Props
 */
type PreviewProps = {
  /**
   * Data
   */
  data: {
    id: string;
    img: string;
    name: string;
    price: number;
    languages: string;
    authorized: boolean;
    publishDate: string;
    inWishlist: boolean;
    authors: BookAuthor[];
    highlightsText: string[];
    availableFormats: string[];
    previewDescription: string;
  };
};

export { PreviewProps };
