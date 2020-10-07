import { Book } from '@account/pages/library/models';

/**
 * Props
 */
type RecommendedProps = {
  data: {
    recommended: Book[];
  };
};

export { RecommendedProps };
