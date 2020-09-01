import * as React from 'react';
import { TalentMattersProps } from './talent-matters.props';
import * as styles from './talent-matters.scss';
import { Icon, H2, Paragraph, SectionTitle } from '@core/components';
import { useTranslation } from 'react-i18next';

/**
 * Renders TalentMatters
 */
const TalentMatters: React.FC<TalentMattersProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.talentMatters}>
      <Icon name='abstract-1' />
      <SectionTitle>{t('for-companies.talent-metters.title')}</SectionTitle>
      <Paragraph className={styles.talentMattersParagraph}>
        {t('for-companies.talent-metters.description')}
      </Paragraph>
    </div>
  );
};

export { TalentMatters };
