import { Pricing } from '@app/models';
import { BookAuthor } from '@account/pages/library/models';

/**
 * Props
 */
type BannerProps = {
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
    pricing: Pricing;
    inCart: boolean;
    isPreorder: boolean;
    preorderDate: string;
    languages: string;
    publishDate: string;
    authors: BookAuthor[];
    previewDescription: string;
  };
};

export { BannerProps };
