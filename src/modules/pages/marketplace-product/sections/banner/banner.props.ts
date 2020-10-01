import { BookAuthor } from '@account/pages/library/models';

/**
 * Props
 */
type BannerProps = {
  /**
   * Data
   */
  data: {
    id: string;
    img: string;
    name: string;
    previewDescription: string;
    authors: BookAuthor[];
    languages: string;
    publishDate: string;
    price: number;
  };
};

export { BannerProps };
