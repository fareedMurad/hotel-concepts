import { SectionTitle } from '@core/components';
import { Caption } from '@pages/components';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Cards } from './components/cards';
import { useHowWeTeachData } from './how-we-teach.hook';
import { HowWeTeachProps } from './how-we-teach.props';
import * as styles from './how-we-teach.scss';

/**
 * Instrument and Tools Card
 */
const ToolsCard = ({ title, description }) => {
  return (
    <div className={styles.toolsCard}>
      <div className={styles.toolsCardTitle}>{title}</div>
      <div className={styles.toolsCardDescription}>{description}</div>
    </div>
  );
};

/**
 * Renders HowWeTeach
 */
const HowWeTeach: React.FC<HowWeTeachProps> = ({}) => {
  const { t } = useTranslation();
  const { data } = useHowWeTeachData();
  return (
    <div className={styles.howWeTeach}>
      <SectionTitle className={styles.title}>
        {t('learning-approach.how-we-teach.title')}
      </SectionTitle>
      <Caption
        className={styles.captionWrapper}
        rate='1.0'
        title={t('learning-approach.word-class-cards.wcc1.title')}
      />
      <Cards />
      <Caption
        rate='2.0'
        title={t('learning-approach.word-class-cards.wcc2.title')}
      >
        {t('learning-approach.word-class-cards.wcc2.description')}
      </Caption>
      <Caption
        rate='3.0'
        title={t('learning-approach.word-class-cards.wcc3.title')}
      >
        {t('learning-approach.word-class-cards.wcc3.description')}
      </Caption>
      <div className={styles.toolsCards}>
        {data.map(({ title, description, id }) => (
          <ToolsCard key={id} title={title} description={description} />
        ))}
      </div>
      <Caption
        rate='4.0'
        title={t('learning-approach.word-class-cards.wcc4.title')}
        className={styles.captionPersonalApproach}
      >
        {t('learning-approach.word-class-cards.wcc4.description')}
      </Caption>
    </div>
  );
};

export { HowWeTeach };
