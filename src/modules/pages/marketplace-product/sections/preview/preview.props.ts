import { BookAuthor, FileModel } from '@account/pages/library/models';
import { Pricing } from '@app/models';

/**
 * Props
 */
type PreviewProps = {
  /**
   * User subscription
   */
  subscriptionStatus: any;
  /**
   * Data
   */
  data: {
    id: string;
    img: string;
    name: string;
    inCart: boolean;
    pricing: Pricing;
    isPreorder: boolean;
    preorderDate: string;
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
