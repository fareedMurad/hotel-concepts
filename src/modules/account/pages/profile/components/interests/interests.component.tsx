import * as React from 'react';
import { InterestsProps } from './interests.props';
import * as styles from './interests.scss';
import { useInterestsData } from './interests.hook';
import { Button } from '@core/components';

/**
 * Renders Interests
 */
const Interests: React.FC<InterestsProps> = ({}) => {
  const { interests } = useInterestsData();
  const [toggleMoreInterests, setToggleMoreInterests] = React.useState(false);
  return (
    <React.Fragment>
      <div className={styles.title}>My interests</div>
      <div className={styles.interestsList}>
        {toggleMoreInterests
          ? interests.map(el => (
              <div className={styles.singleInteress} key={el.id}>
                {el.name}
              </div>
            ))
          : interests
              .filter((el, idx) => idx < 6)
              .map(el => (
                <div className={styles.singleInteress} key={el.id}>
                  {el.name}
                </div>
              ))}
      </div>
      {toggleMoreInterests && (
        <Button className={styles.saveButton}>Save</Button>
      )}
      <div
        onClick={() => setToggleMoreInterests(!toggleMoreInterests)}
        className={styles.addMoreInterests}
      >
        {toggleMoreInterests ? 'Hide it' : 'Add more interests'}
      </div>
    </React.Fragment>
  );
};

export { Interests };
