import * as React from 'react';
import { HeroBlockProps } from './hero-block.props';
import * as styles from './hero-block.scss';
import { NavLink } from 'react-router-dom';
import { ScrollButton } from '@core/components/scroll-button';

const HeroCard = ({ img, activity, captions }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(${require(`img/insights/insights-${img}.png`)})`
        }}
      >
        <div className={styles.cardActivity}>{activity}</div>
        <div className={styles.cardCaptions}>
          {captions[1]}
          <br />
          {captions[2]}
          <br />
          {captions[3]}
          <br />
        </div>

        <NavLink to={`/to/${captions[0]}`} className={styles.cardLink}>
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
            <div>Cordie Insights</div>
            <div>Talks recommended just for you, delivered to your inbox.</div>
          </div>
        </div>
        <ScrollButton text='Scroll' className={styles.arrow} />
      </div>
      <div className={styles.heroSubmain}>
        <HeroCard
          img='2'
          activity='Marketing'
          captions={[
            '/remarkable-truth?',
            'The Remarkable',
            'Truth About',
            'Hospitality & World Peace'
          ]}
        />
        <HeroCard
          img='3'
          activity='Marketing'
          captions={[
            '/hotel-?',
            'Hotel Concierge Life:',
            'Hospitality at the Four',
            'Seasons.'
          ]}
        />
      </div>
    </div>
  );
};

export { HeroBlock };
