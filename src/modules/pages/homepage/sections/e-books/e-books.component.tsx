import { ButtonFilter, SectionTitle } from '@core/components';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BookItem } from './components/book-item';
import { useEBooksData } from './e-books.hook';
import { EBooksProps } from './e-books.props';
import * as styles from './e-books.scss';

/**
 * Renders EBooks
 */
const EBooks: React.FC<EBooksProps> = ({}) => {
  const { filters } = useEBooksData();
  const { t } = useTranslation();

  const book = {
    image: require('img/mock-books/ebook1.png'),
    price: '100',
    sale: '20',
    title: 'Tactics of Increasing Revenue'
  };
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
        <BookItem book={book} />
      </div>
    </div>
  );
};

export { EBooks };
