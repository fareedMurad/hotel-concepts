import * as React from 'react';
import { IncreaseYourCompetitiveProps } from './increase-your-competitive.props';
import * as styles from './increase-your-competitive.scss';
import { Icon, H2, Paragraph, SectionTitle } from '@core/components';
import { useTranslation } from 'react-i18next';

/**
 * Renders IncreaseYourCompetitive
 */
const IncreaseYourCompetitive: React.FC<IncreaseYourCompetitiveProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.increaseYourCompetitive}>
      <Icon name='abstract-1' />
      <SectionTitle>
        {t('for-companies.increase-your-competitive.title')}
      </SectionTitle>
      <Paragraph className={styles.increaseYourCompetitiveText}>
        {t('for-companies.increase-your-competitive.description')}
      </Paragraph>
    </div>
  );
};

export { IncreaseYourCompetitive };
