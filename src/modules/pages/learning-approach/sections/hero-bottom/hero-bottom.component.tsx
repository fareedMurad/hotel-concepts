import * as React from 'react';
import { HeroBottomProps } from './hero-bottom.props';
import * as styles from './hero-bottom.scss';
import { H4, H3, Button } from '@core/components';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';

/**
 * Renders HeroBottom
 */
const HeroBottom: React.FC<HeroBottomProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.heroBottom}
      style={{
        backgroundImage: `url(${require(`img/learning-approach/home-footer-1.png`)})`
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <H3 className={styles.heroContentTitle}>
            Make the most of your <br /> online learning experience
          </H3>
          <H4 className={styles.heroContentDescription}>
            Explore the latest business <br />
            insights and thought leadership <br /> from Kordie
          </H4>
          <Button
            className={styles.heroContentButton}
            children='Explore our insights'
            arrow='&rarr;'
            onClick={() => dispatch(navigate('/insights'))}
            width={204}
          />
        </div>
      </div>
    </div>
  );
};

export { HeroBottom };
