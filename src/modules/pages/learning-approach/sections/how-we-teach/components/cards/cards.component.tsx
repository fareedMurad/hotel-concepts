import { useAnimation } from '@pages/learning-approach/animations/animations.hook';
import { useToggleAnimate } from '@pages/learning-approach/toggle-animation.hook';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { animated } from 'react-spring';
import { CardsProps } from './cards.props';
import * as styles from './cards.scss';

/**
 * World Class Card
 */
const WorldClassCard = ({ img, title, description }) => (
  <div className={styles.wccCard}>
    <img src={require(`img/${img}`)} className={styles.wccImage} />
    <div className={styles.wccText}>
      <div className={styles.wccTextTitle}>{title}</div>
      <div className={styles.wccTextDescription}>{description}</div>
    </div>
  </div>
);

/**
 * Renders Cards
 */
const Cards: React.FC<CardsProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      <div className={styles.wccCards}>
        <WorldClassCard
          img={'learning-approach/card-1'}
          title={t(
            'learning-approach.word-class-cards.wcc1.cards.card1.sub-title'
          )}
          description={t(
            'learning-approach.word-class-cards.wcc1.cards.card1.description'
          )}
        />
        <WorldClassCard
          img={'learning-approach/card-2'}
          title={t(
            'learning-approach.word-class-cards.wcc1.cards.card2.sub-title'
          )}
          description={t(
            'learning-approach.word-class-cards.wcc1.cards.card2.description'
          )}
        />
        <WorldClassCard
          img={'learning-approach/card-3'}
          title={t(
            'learning-approach.word-class-cards.wcc1.cards.card2.sub-title'
          )}
          description={t(
            'learning-approach.word-class-cards.wcc1.cards.card2.description'
          )}
        />
      </div>
    </section>
  );
};

export { Cards };
