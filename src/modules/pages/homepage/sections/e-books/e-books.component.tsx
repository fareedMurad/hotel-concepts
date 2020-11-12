import { ButtonFilter, SectionTitle, Spinner } from '@core/components';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BookItem } from './components/book-item';
import { useEBooksData } from './e-books.hook';
import { EBooksProps } from './e-books.props';
import { Button } from '@core/components';
import * as styles from './e-books.scss';
import { Book } from '@account/pages/library/models';
import { MarketplaceCategory } from '@pages/marketplace/models';
import { navigate } from '@router/store';
import { useDispatch } from 'react-redux';

type categorymodel = {
  category: MarketplaceCategory;
  items: Book[];
  total: number;
};
/**
 * Renders EBooks
 */
const EBooks: React.FC<EBooksProps> = ({}) => {
  const { filters, books, categories } = useEBooksData();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = React.useState('Digital Marketing');
  const [currentBooks, setCurrentBooks] = React.useState<categorymodel>(null);
  const foundproducts = categories.filter(
    i => i.category.category === activeFilter
  );

  React.useEffect(() => {
    setCurrentBooks(foundproducts[0]);
  }, [activeFilter, categories]);

  if (!currentBooks) {
    return <Spinner />;
  }
  return (
    <div className={styles.eBooks}>
      <div className={styles.title}>
        <SectionTitle>{t('home.e-books.title')}</SectionTitle>
        <div className={styles.subtitle}>
          <div className={styles.subtitleText}>
            {t('home.e-books.subtitle')}
          </div>
        </div>
      </div>
      <div className={styles.filters}>
        {categories.length ? (
          categories
            .filter((p, idx) => idx < 7)
            .map(({ total, category }, index) => (
              <ButtonFilter
                className={styles.buttonFilter}
                key={index}
                title={`${category.category} ${total}`}
                onClick={() => {
                  setActiveFilter(category.category);
                }}
                active={category.category === activeFilter}
              />
            ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className={styles.booksList}>
        {currentBooks?.items
          .filter((i, idx) => idx < 6)
          .map((book, index) => {
            return <BookItem key={index} book={book} />;
          })}
      </div>
      <Button
        className={styles.buttonExplore}
        arrow
        onClick={() => dispatch(navigate('/marketplace'))}
      >
        {t('home.e-books.button-text')}
      </Button>
    </div>
  );
};

export { EBooks };
