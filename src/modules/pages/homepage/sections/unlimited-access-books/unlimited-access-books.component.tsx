import * as React from 'react';
import * as styles from './unlimited-access-books.scss';
import { Link } from 'react-router-dom';
import { UnlimitedAccessBooksProps } from './unlimited-access-books.props';
import { useTranslation } from 'react-i18next';
import { useUnlimitedAccessBooksData } from './unlimited-access-books.hook';

const ListItem = ({ data }) => {
  const { caption } = data;
  return (
    <div className={styles.item}>
      <div className={styles.itemIcon} />
      <div className={styles.itemCaption}>{caption}</div>
    </div>
  );
};
/**
 * Renders UnlimitedAccessBooks
 */
const UnlimitedAccessBooks: React.FC<UnlimitedAccessBooksProps> = ({}) => {
  const { dataList, imageUrl } = useUnlimitedAccessBooksData();
  const { t } = useTranslation();

  return (
    <div className={styles.unlimitedAccessBooks}>
      <main>
        <header className={styles.header}>
          <div className={styles.headerCaption}>
            {t('home.unlimited-access.caption')}
          </div>
          <div className={styles.headerTitle}>
            {t('home.unlimited-access.title')}
          </div>
          <div className={styles.headerDescription}>
            {t('home.unlimited-access.description')}
          </div>
        </header>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            {t('home.unlimited-access.subtitle')}
          </div>
          <div className={styles.list}>
            {dataList.map(item => (
              <ListItem data={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className={styles.navigation}>
          <Link to='' className={styles.link}>
            {t('home.unlimited-access.link-one')}
          </Link>
          <Link to='' className={styles.link}>
            {t('home.unlimited-access.link-two')}
          </Link>
        </div>
      </main>
      <aside className={styles.aside}>
        <img className={styles.image} src={imageUrl} />
      </aside>

      {/* content */}
    </div>
  );
};

export { UnlimitedAccessBooks };
