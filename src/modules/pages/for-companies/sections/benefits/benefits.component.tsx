import * as React from 'react';
import { BenefitsProps } from './benefits.props';
import * as styles from './benefits.scss';
import { H3 } from '@core/components';
import { BenefitsCard } from './benefits-card';
import { useBenefitsCards } from './benefits.hook';
import { useTranslation } from 'react-i18next';
/**
 * Renders Benefits
 */
const Benefits: React.FC<BenefitsProps> = ({}) => {
  const { t } = useTranslation();
  const { cardsText, benefitsImage, cardsText2 } = useBenefitsCards();

  return (
    <div className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsOrganization}>
          <H3 className={styles.benefitsTitle}>
            {t('for-companies.benefits.for-organization.title')}
          </H3>
          {cardsText.map(card => (
            <BenefitsCard key={card.id} text={card.text} />
          ))}
        </div>
        <div className={styles.benefitsEmployees}>
          <H3 className={styles.benefitsTitle}>
            {t('for-companies.benefits.for-employees.title')}
          </H3>
          {cardsText2.map(card => (
            <BenefitsCard key={card.id} text={card.text} />
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${benefitsImage})`
        }}
        className={styles.image}
      />
    </div>
  );
};

export { Benefits };
