import * as React from 'react';
import { ContributorsProps } from './contributors.props';
import * as styles from './contributors.scss';
import { Button, HeroTitle, HeroSubtitle } from '@core/components';
import { ContributorsContainer, BecomeContributing } from './sections';
import { ScrollButton } from '@core/components/scroll-button';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useContributorsData } from './contributor.hook';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

/**
 * Renders Contributors
 */

const Contributors: React.FC<ContributorsProps> = ({}) => {
  const ScrollToEnroll = () => scrollTo('become-contributor');
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { contributorsHeroImage } = useContributorsData(language);

  return (
    <div className={styles.contributors}>
      <header className={styles.header}>
        <div
          style={{
            backgroundImage: `url(${contributorsHeroImage})`
          }}
          className={styles.headerImg}
        >
          <div className={styles.headerContent}>
            <HeroTitle>{t('contributors.hero.title')}</HeroTitle>
            <HeroSubtitle>{t('contributors.hero.sub-title')}</HeroSubtitle>
            <Button
              className={styles.headerBtn}
              onClick={ScrollToEnroll}
              children={t('contributors.hero.button-text')}
              arrow='&#8594;'
              width={230}
            />
          </div>
          <ScrollButton
            text={t('contributors.hero.scroll')}
            className={styles.headerScroll}
          />
        </div>
      </header>
      <main>
        <ContributorsContainer />
        <BecomeContributing />
      </main>
    </div>
  );
};

export { Contributors };
