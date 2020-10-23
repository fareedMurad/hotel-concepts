import { BookAuthor, FileModel } from '@account/pages/library/models';

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
    inCart: boolean;
    languages: string;
    authorized: boolean;
    publishDate: string;
    inWishlist: boolean;
    authors: BookAuthor[];
    previewPages: {
      title: string;
      file: FileModel;
    };
    highlightsText: string[];
    availableFormats: string[];
    previewDescription: string;
  };
};

export { PreviewProps };
