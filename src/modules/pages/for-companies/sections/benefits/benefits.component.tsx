import * as React from 'react';
import { BenefitsProps } from './benefits.props';
import * as styles from './benefits.scss';
import { H3 } from '@core/components';
import { BenefitsCard } from './benefits-card';
import { useBenefitsCards } from './benefits.hook';
/**
 * Renders Benefits
 */
const Benefits: React.FC<BenefitsProps> = ({}) => {
  const { cardsText, benefitsImage } = useBenefitsCards();

  return (
    <div className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsOrganization}>
          <H3 className={styles.benefitsTitle}>
            Benefits for <br /> organisation
          </H3>
          {cardsText.map(card => (
            <BenefitsCard key={card.id} text={card.text} />
          ))}
        </div>
        <div className={styles.benefitsEmployees}>
          <H3 className={styles.benefitsTitle}>
            Benefits for <br /> employees
          </H3>
          {cardsText.map(card => (
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
