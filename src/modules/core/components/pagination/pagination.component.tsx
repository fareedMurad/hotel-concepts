import * as React from 'react';
import { PaginationProps } from './pagination.props';
import * as styles from './pagination.scss';
import classNames from 'classnames';
import { Icon } from '../icon';

/**
 * Renders Pagination
 */
const Pagination: React.FC<PaginationProps> = ({
  countOfPages,
  currentPage,
  onChangePage
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.navButton}
        disabled={currentPage == 1}
        onClick={onChangePage(
          currentPage - 1 > 0 ? currentPage - 1 : currentPage
        )}
      >
        <Icon name='arrows/arrow-left' className={styles.arrow} />
      </button>
      {[...Array(countOfPages).keys()].map(page => (
        <button
          key={page}
          className={classNames(styles.pageButton, {
            [styles.active]: currentPage == page + 1
          })}
          onClick={onChangePage(page + 1)}
        >
          {page + 1}
        </button>
      ))}
      <button
        className={styles.navButton}
        disabled={currentPage == countOfPages}
        onClick={onChangePage(
          currentPage + 1 <= countOfPages ? currentPage + 1 : currentPage
        )}
      >
        <Icon name='arrows/arrow-right-b' className={styles.arrow} />
      </button>
    </div>
  );
};

export { Pagination };
