import { SectionTitle } from '@core/components';
import * as React from 'react';
import { useHospitalityData } from './hospitality.hook';
import { HospitalityProps } from './hospitality.props';
import * as styles from './hospitality.scss';

/**
 * Renders Hospitality
 */
const Hospitality: React.FC<HospitalityProps> = ({}) => {
  const { data } = useHospitalityData();

  return (
    <div className={styles.hospitality}>
      <SectionTitle className={styles.title}>
        We are powered by hospitality
      </SectionTitle>
      <div className={styles.subTitle}>
        Our programs are built in partnership with the world’s most innovative
        hospitality companies and taught by industry leaders.
      </div>
      <div className={styles.cards}>
        {data.map((el, i) => (
          <div key={i} className={styles.card}>
            <img src={require(`img/hospitality/hospitality-${i + 1}`)} alt='' />
            <div className={styles.country}>({el.country})</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Hospitality };
