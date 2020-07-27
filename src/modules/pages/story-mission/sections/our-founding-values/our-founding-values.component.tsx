import * as React from 'react';
import { OurFoundingValuesProps } from './our-founding-values.props';
import * as styles from './our-founding-values.scss';
import { HeroCaption } from '@pages/story-mission/components';
import { useOurFoundingValuesData } from './our-founding-values.hook';
import { FoundingValuesCard } from '@pages/story-mission/components/founding-values-card';

/**
 * Renders OurFoundingValues
 */
const OurFoundingValues: React.FC<OurFoundingValuesProps> = ({}) => {
  const { data } = useOurFoundingValuesData();


  return (
    <div className={styles.ourFoundingValues} id='values'>
      <div className={styles.wrapper}>
        <HeroCaption title={`Our Founding Values`} className={styles.caption} />
      </div>
      <div className={styles.cardList}>
        {data.map(item => (
          <FoundingValuesCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export { OurFoundingValues };
