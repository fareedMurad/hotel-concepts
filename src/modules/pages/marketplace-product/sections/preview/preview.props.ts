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
    previewDescription: string;
    authors: BookAuthor[];
    languages: string;
    publishDate: string;
    highlightsText: string[];
    price: number;
    availableFormats: string[];
  };
};

export { PreviewProps };
