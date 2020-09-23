import * as React from 'react';
import { BooksProps } from './books.props';
import * as styles from './books.scss';
import { useLibraryData } from '../../library.hook';
import { BookCard } from '../book-card';

/**
 * Renders Books
 */
const Books: React.FC<BooksProps> = ({ type }) => {
  const books = useLibraryData();

  if (type === 'purchased')
    return (
      <div className={styles.books}>
        {books
          .filter(el => el.purchased === true)
          .map(book => {
            return <BookCard key={book.id} book={book} type={type} />;
          })}
      </div>
    );

  return (
    <div className={styles.books}>
      {books
        .filter(el => el.purchased === false)
        .map(book => {
          return <BookCard key={book.id} book={book} type={type} />;
        })}
    </div>
  );
};

export { Books };
