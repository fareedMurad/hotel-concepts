import * as React from 'react';
import { InterestsProps } from './interests.props';
import * as styles from './interests.scss';
import { useInterestsData } from './interests.hook';
import { Button } from '@core/components';
import classNames from 'classnames';
import { useEffect } from 'react';
import { chooseInterests } from '@app/redux/auth';
import { Interest } from '@account/models';

const sortInterests = (interests: Interest[], selected) => {
  const result = [];
  interests.forEach(interest => {
    if (selected.includes(interest.value)) {
      result.push(interest);
      interests = interests.filter(one => one !== interest);
    }
  });
  return [...result, ...interests];
};

/**
 * Renders Interests
 */
const Interests: React.FC<InterestsProps> = ({ interests: userInterests }) => {
  const {
    selectedInterests,
    selectInterest,
    toggleMoreInterests,
    setToggleMoreInterests,
    // setInterests,
    dispatch
  } = useInterestsData();

  let { interests } = useInterestsData();

  useEffect(() => {
    selectInterest(userInterests);
    // interests = sortInterests(interests, userInterests);
    // setInterests(interests);
  }, [userInterests]);

  /**
   * Handle click
   */
  const handleSelect = (value: string) => {
    const exists = selectedInterests.some(one => one == value);

    exists
      ? selectInterest(selectedInterests.filter(one => one != value))
      : selectInterest([...selectedInterests, value]);
  };

  // REFACTOR THIS . KOSTIL
  /**
   * If Add more interests is not toggled, show only 6 interests
   */
  let showInterests = interests;
  if (!toggleMoreInterests) {
    showInterests = interests.filter((_, idx) => idx < 5);
  }

  return (
    <React.Fragment>
      <div className={styles.title}>My interests</div>
      <div className={styles.interests}>
        {showInterests.map(interest => {
          const { value, title } = interest;
          const match = selectedInterests.some(one => one == value);

          return (
            <div
              className={classNames(styles.interest, {
                [styles.interestSelected]: match
              })}
              onClick={() => handleSelect(value)}
              key={value}
            >
              {title}
            </div>
          );
        })}
      </div>
      {toggleMoreInterests && (
        <Button
          className={styles.save}
          onClick={() => dispatch(chooseInterests(selectedInterests))}
        >
          Save
        </Button>
      )}
      <div
        onClick={() => setToggleMoreInterests(!toggleMoreInterests)}
        className={styles.moreInterests}
      >
        {toggleMoreInterests ? 'Hide it' : 'Add more interests'}
      </div>
    </React.Fragment>
  );
};

export { Interests };
