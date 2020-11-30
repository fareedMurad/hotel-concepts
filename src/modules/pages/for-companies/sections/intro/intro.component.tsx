import * as React from 'react';
import { IntroProps } from './intro.props';
import * as styles from './intro.scss';
import { Button, HeroTitle, HeroSubtitle } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useIntroData } from './intro.hook';
import { useTranslation } from 'react-i18next';
import { LazyBackground } from '@pages/components/lazy-background/lazy-background.component';

/**
 * Renders Intro
 */
const Intro: React.FC<IntroProps> = ({}) => {
  const { t } = useTranslation();
  const ScrollToEnroll = () => {
    scrollTo('consult-request');
  };
  const { reducedImageId, fullImageId } = useIntroData();

  return (
    <LazyBackground
      fullImageId={fullImageId}
      reducedImageId={reducedImageId}
      className={styles.intro}
    >
      <main className={styles.introContent}>
        <HeroTitle className={styles.introCaption}>
          {t('for-companies.intro.title')}
        </HeroTitle>
        <HeroSubtitle className={styles.introDescription}>
          {t('for-companies.intro.description')}
        </HeroSubtitle>
        <Button
          className={styles.button}
          onClick={ScrollToEnroll}
          children={t('for-companies.intro.button-text')}
          arrow
        />
      </main>
      <ScrollButton
        text={t('for-companies.intro.scroll')}
        className={styles.arrow}
      />
    </LazyBackground>
  );
};

export { Intro };
