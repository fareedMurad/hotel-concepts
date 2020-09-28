import * as React from 'react';
import { HeroBottomProps } from './footer-hero-learning-approach.props';
import * as styles from './footer-hero-learning-approach.scss';
import { H4, H3, Button } from '@core/components';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { useFooterHeroLearningApproachData } from './footer-hero-learning-approach.hook';
import { useTranslation } from 'react-i18next';

/**
 * Renders HeroBottom
 */
const FooterHeroLearningApproach: React.FC<HeroBottomProps> = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { footerHeroImage } = useFooterHeroLearningApproachData();

  return (
    <div
      className={styles.heroBottom}
      style={{ backgroundImage: `url(${footerHeroImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <H3 className={styles.heroContentTitle}>
            {t('learning-approach.footer-hero.title')}
          </H3>
          <H4 className={styles.heroContentDescription}>
            {t('learning-approach.footer-hero.description')}
          </H4>
          <Button
            className={styles.heroContentButton}
            children={t('learning-approach.footer-hero.button-text')}
            arrow
            onClick={() => dispatch(navigate('/insights'))}
            width={204}
          />
        </div>
      </div>
    </div>
  );
};

export { FooterHeroLearningApproach };
