import * as React from 'react';
import { HeroBlockProps } from './hero-block.props';
import * as styles from './hero-block.scss';
import { NavLink } from 'react-router-dom';
import { ScrollButton } from '@core/components/scroll-button';
import { HeroTitle, HeroSubtitle, Spinner } from '@core/components';
import { useMostPopularArticles } from './hero-block.hook';
import { string } from 'yup';

const HeroCard = ({ popularArticles, popularArticlesLoading }) => {
  const {
    title,
    categoriesCollection: { items: categories },
    sys: { id },
    articleImage: { url }
  } = popularArticles;
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(${url})`
        }}
      >
        {categories.map(el => (
          <div key={el.category} className={styles.cardActivity}>
            {el.category}
          </div>
        ))}

        <div className={styles.cardCaptions}>{title}</div>

        <NavLink to={`insights/article/${id}`} className={styles.cardLink}>
          Read more
        </NavLink>
      </div>
      <div className={styles.overlay} />
    </div>
  );
};
/**
 * Renders HeroBlock
 */
const HeroBlock: React.FC<HeroBlockProps> = ({}) => {
  const { popularArticles, popularArticlesLoading } = useMostPopularArticles();
  if (popularArticlesLoading) return <Spinner />;
  return (
    <div className={styles.heroBlock}>
      <div className={styles.heroMain}>
        <div
          className={styles.heroMainPic}
          style={{
            backgroundImage: `url(${require('img/insights/insights-1.png')}`
          }}
        >
          <div className={styles.heroMainContent}>
            <div>New</div>
            <HeroTitle>Cordie Insights</HeroTitle>
            <HeroSubtitle>
              Talks recommended just for you, delivered to your inbox.
            </HeroSubtitle>
          </div>
        </div>
        <ScrollButton text='Scroll' className={styles.arrow} />
      </div>
      <div className={styles.heroSubmain}>
        <HeroCard
          popularArticles={popularArticles[0]}
          popularArticlesLoading={popularArticlesLoading}
        />

        {popularArticles.length > 0 && (
          <HeroCard
            popularArticles={popularArticles[1]}
            popularArticlesLoading={popularArticlesLoading}
          />
        )}
      </div>
    </div>
  );
};

export { HeroBlock };
