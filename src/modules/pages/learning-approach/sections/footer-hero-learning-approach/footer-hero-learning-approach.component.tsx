import * as React from 'react';
import { HeroBottomProps } from './footer-hero-learning-approach.props';
import * as styles from './footer-hero-learning-approach.scss';
import { H4, H3, Button } from '@core/components';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { useFooterHeroLearningApproachData } from './footer-hero-learning-approach.hook';

/**
 * Renders HeroBottom
 */
const FooterHeroLearningApproach: React.FC<HeroBottomProps> = ({}) => {
  const dispatch = useDispatch();
  const { footerHeroImage } = useFooterHeroLearningApproachData();

  return (
    <div
      className={styles.heroBottom}
      style={{ backgroundImage: `url(${footerHeroImage})` }}
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

export { FooterHeroLearningApproach };
