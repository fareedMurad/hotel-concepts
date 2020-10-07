import * as React from 'react';
import * as styles from './about.scss';
import { useAboutData } from './about.hook';
import { PreCaption, SectionTitle } from '@core/components';
import { useTranslation } from 'react-i18next';

/**
 * Renders About
 */
const About: React.FC = () => {
  const { data } = useAboutData();
  const { t } = useTranslation();

  return (
    <section className={styles.about}>
      <div className={styles.title}>
        <PreCaption>{t('home.about.pre-caption')}</PreCaption>
        <SectionTitle>{t('home.about.title')}</SectionTitle>
        <div>{t('home.about.sub-title')}</div>
      </div>
      <div className={styles.content}>
        {data.map((item, index) => (
          <div key={index} className={styles.item}>
            <div>{index + 1}.0</div>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { About };
