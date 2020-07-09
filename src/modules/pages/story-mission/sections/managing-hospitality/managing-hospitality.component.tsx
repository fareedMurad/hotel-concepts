import * as React from 'react';
import { ManagingHospitalityProps } from './managing-hospitality.props';
import * as styles from './managing-hospitality.scss';
import { H2 } from '@core/components';
import { useManagingHospitalityData } from './managing-hospitality.hook';
import { TipCard } from '@pages/story-mission/components';

/**
 * Renders ManagingHospitality
 */
const ManagingHospitality: React.FC<ManagingHospitalityProps> = ({}) => {
  const { data } = useManagingHospitalityData();

  return (
    <div className={styles.managingHospitality}>
      <H2 className={styles.title}>
        Managing hospitality <br /> in extraordinary times
      </H2>
      <div className={styles.cardsContainer}>
        {data.map(item => (
          <TipCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export { ManagingHospitality };
