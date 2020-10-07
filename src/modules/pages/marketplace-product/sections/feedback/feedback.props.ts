import { BookComment } from '@account/pages/library/models';

/**
 * Props
 */
type FeedbackProps = {
  /**
   * Data
   */
  data: {
    comments: BookComment[];
  };
};

export { FeedbackProps };
