import * as React from 'react';
import { HeroBlockProps } from './hero-block.props';
import * as styles from './hero-block.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { ScrollButton } from '@core/components/scroll-button';
import { HeroTitle, HeroSubtitle, Spinner } from '@core/components';
import { useMostPopularArticles } from './hero-block.hook';
import { useMediaPoints } from '@core/shared';

const HeroCard = ({ firstScreenArticle }) => {
  if (!firstScreenArticle) return <Spinner />;
  const history = useHistory();
  const {
    title,
    categoriesCollection: { items: categories },
    sys: { id },
    articleImage: { url }
  } = firstScreenArticle;
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(${url})`
        }}
      >
        <div className={styles.tags}>
          {categories.map(el => (
            <div key={el.category} className={styles.cardActivity}>
              {el.category}
            </div>
          ))}
        </div>

        <div
          className={styles.cardCaptions}
          onClick={() => history.push(`/insights/article/${id}`)}
        >
          {title}
        </div>
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
  const {
    firstScreenArticles,
    firstScreenArticlesLoading,
    insightsHeroImage
  } = useMostPopularArticles();
  const { mobile } = useMediaPoints();
  if (firstScreenArticlesLoading) return <Spinner />;

  return (
    <div className={styles.heroBlock}>
      <div className={styles.heroMain}>
        <div
          className={styles.heroMainPic}
          style={{
            backgroundImage: `url(${insightsHeroImage?.url})`
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
        {!mobile && <ScrollButton text='Scroll' className={styles.arrow} />}
      </div>
      <div className={styles.heroSubmain}>
        <HeroCard firstScreenArticle={firstScreenArticles[0]} />

        {firstScreenArticles.length > 0 && (
          <HeroCard firstScreenArticle={firstScreenArticles[1]} />
        )}
      </div>
    </div>
  );
};

export { HeroBlock };
