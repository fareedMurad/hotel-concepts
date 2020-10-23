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
    price: number;
    inCart: boolean;
    languages: string;
    publishDate: string;
    authors: BookAuthor[];
    previewDescription: string;
  };
};

export { BannerProps };
