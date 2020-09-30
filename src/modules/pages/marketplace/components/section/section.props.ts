import { Book } from '@account/pages/library/models';

/**
 * Book props
 */
type BookProps = {
  /**
   * Book
   */
  book: Book;
  /**
   * Handle click
   */
  onClick?: () => void;
};

/**
 * Props
 */
type SectionProps = {
  /**
   * Section id
   */
  id?: string;
  /**
   * Classname
   */
  className?: string;
  /**
   * Caption
   */
  caption: string;
  /**
   * Description
   */
  description: string;
  /**
   * Data
   */
  data: Book[];
};

export { SectionProps, BookProps };
