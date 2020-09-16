import * as React from 'react';
import { InterestsProps } from './interests.props';
import * as styles from './interests.scss';
import { useInterestsData } from './interests.hook';

/**
 * Renders Interests
 */
const Interests: React.FC<InterestsProps> = ({}) => {
  const { interests } = useInterestsData();
  return (
    <React.Fragment>
      <div className={styles.title}>My interests</div>
      <div className={styles.interestsList}>
        {interests.map(el => (
          <div className={styles.singleInteress} key={el.id}>
            {el.name}
          </div>
        ))}
      </div>
      <div className={styles.addMoreInterests}>Add more interests</div>
    </React.Fragment>
  );
};

export { Interests };
