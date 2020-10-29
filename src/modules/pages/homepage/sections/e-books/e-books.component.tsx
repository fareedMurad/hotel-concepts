import { ButtonFilter, SectionTitle } from '@core/components';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BookItem } from './components/book-item';
import { useEBooksData } from './e-books.hook';
import { EBooksProps } from './e-books.props';
import { Button } from '@core/components';
import * as styles from './e-books.scss';

/**
 * Renders EBooks
 */
const EBooks: React.FC<EBooksProps> = ({}) => {
  const { filters, books } = useEBooksData();
  const { t } = useTranslation();

  return (
    <div className={styles.eBooks}>
      <div className={styles.title}>
        <SectionTitle>New E-books for you</SectionTitle>
        <div className={styles.titleSubtitle}>Short text about e-books</div>
        <div className={styles.titleSubtitle}>Short text about e-books</div>
      </div>
      <div className={styles.filters}>
        {filters.map(filter => (
          <ButtonFilter
            className={styles.filtersFilter}
            key={filter}
            title={filter}
            onClick={() => {}}
          />
        ))}
      </div>
      <div className={styles.booksList}>
        {books.map(book => (
          <BookItem key={book.title} book={book} />
        ))}
      </div>
      <Button className={styles.button} arrow>
        Explore library
      </Button>
    </div>
  );
};

export { EBooks };
