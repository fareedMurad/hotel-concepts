import * as React from 'react';
import { ManagingHospitalityProps } from './managing-hospitality.props';
import * as styles from './managing-hospitality.scss';
import { SectionTitle } from '@core/components';
import { useManagingHospitalityData } from './managing-hospitality.hook';
import { TipCard } from '@pages/story-mission/components';

/**
 * Renders ManagingHospitality
 */
const ManagingHospitality: React.FC<ManagingHospitalityProps> = ({}) => {
  const { data } = useManagingHospitalityData();

  return (
    <div className={styles.managingHospitality}>
      <SectionTitle className={styles.title}>
        Managing hospitality <br /> in extraordinary times
      </SectionTitle>
      <div className={styles.cardsContainer}>
        {data.map(item => (
          <TipCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export { ManagingHospitality };
