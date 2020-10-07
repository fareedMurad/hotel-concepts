import { fetchMarketplaceByCategory } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import classNames from 'classnames';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { HeroProps } from './hero.props';
import * as styles from './hero.scss';

/**
 * Scroll into section
 */
const scrollInto = (id: string) => {
  const element = document.getElementById(id);

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/**
 * Renders Hero
 */
const Hero: React.FC<HeroProps> = ({ className, categories }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedCategory } = useSelector((state: State) => state.marketplace);

  return (
    <div
      className={classNames(styles.hero, className)}
      style={{ backgroundImage: `url(${require('img/my-account-hero.png')})` }}
    >
      <div className={styles.info}>
        <div className={styles.title}>{t('marketplace.title')}</div>
        <div className={styles.description}>{t('marketplace.description')}</div>
      </div>
      <div className={styles.categories}>
        {categories.map(({ category: { category, id }, total }) => {
          const match = selectedCategory?.id == id;
          const isNotEmpty = total > 0;

          return (
            isNotEmpty && (
              <div
                className={classNames(styles.category, {
                  [styles.categorySelected]: match
                })}
                onClick={() => {
                  scrollInto(id);
                  dispatch(fetchMarketplaceByCategory(id));
                }}
                key={id}
              >
                <div className={styles.categoryCaption}>{category}</div>
                <div className={styles.categoryAmount}>({total})</div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export { Hero };
