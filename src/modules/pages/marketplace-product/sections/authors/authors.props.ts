import { BookAuthor } from '@account/pages/library/models';

/**
 * Props
 */
type AuthorsProps = {
  /**
   * Data
   */
  data: {
    authors: BookAuthor[];
  };
};

export { AuthorsProps };
