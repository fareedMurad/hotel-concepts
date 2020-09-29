import * as React from 'react';
import { IntroProps } from './intro.props';
import * as styles from './intro.scss';
import { Button, HeroTitle, HeroSubtitle } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useIntroData } from './intro.hook';
import { useTranslation } from 'react-i18next';

/**
 * Renders Intro
 */
const Intro: React.FC<IntroProps> = ({}) => {
  const { t } = useTranslation();
  const ScrollToEnroll = () => {
    scrollTo('consult-request');
  };
  const { introData } = useIntroData();

  return (
    <div
      className={styles.intro}
      style={{ backgroundImage: `url(${introData})` }}
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
    </div>
  );
};

export { Intro };
