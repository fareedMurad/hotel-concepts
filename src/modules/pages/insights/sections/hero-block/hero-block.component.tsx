import * as React from 'react';
import { HeroBlockProps } from './hero-block.props';
import * as styles from './hero-block.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { ScrollButton } from '@core/components/scroll-button';
import { HeroTitle, HeroSubtitle, Spinner } from '@core/components';
import { useMostPopularArticles } from './hero-block.hook';
import { useMediaPoints } from '@core/shared';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

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
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const {
    firstScreenArticles,
    firstScreenArticlesLoading,
    insightsHeroImage
  } = useMostPopularArticles(language);
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
            <div>{t('insights.hero.pre-caption')}</div>
            <HeroTitle>{t('insights.hero.title')}</HeroTitle>
            <HeroSubtitle>{t('insights.hero.description')}</HeroSubtitle>
          </div>
        </div>
        {!mobile && (
          <ScrollButton
            text={t('insights.hero.scroll')}
            className={styles.arrow}
          />
        )}
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
