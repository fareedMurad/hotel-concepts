import { chooseInterests } from '@app/redux/auth';
import { Button, Preloader } from '@core/components';

import { Preloaders } from '@ui/models';
import { toggleToast } from '@ui/toast';
import classNames from 'classnames';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInterestsData } from './interests.hook';
import * as styles from './interests.scss';

/**
 * Renders Interests
 */
const Interests: React.FC = () => {
  const { interests, selectedInterests, selectInterest } = useInterestsData();
  const dispatch = useDispatch();
  const isEmpty = selectedInterests?.length <= 0;
  /**
   * Handle click
   */
  const handleSelect = (value: string) => {
    const exists = selectedInterests.some(one => one == value);

    exists
      ? selectInterest(selectedInterests.filter(one => one != value))
      : selectInterest([...selectedInterests, value]);
  };

  return (
    <div className={styles.interests}>
      <Preloader id={Preloaders.interests}>
        <div className={styles.title}>Sign up</div>
        <div className={styles.description}>Choose your 3 interests</div>
        <div className={styles.list}>
          {interests.map(({ title, value }) => {
            const match = selectedInterests.some(one => one == value);
            const isDisabled =
              selectedInterests.length >= 3 &&
              selectedInterests.indexOf(value) == -1;

            return (
              <div
                className={classNames(styles.interest, {
                  [styles.interestSelected]: match,
                  [styles.interestDisabled]: isDisabled && !match
                })}
                onClick={() => !isDisabled && handleSelect(value)}
                key={value}
              >
                {title}
              </div>
            );
          })}
        </div>
        <Button
          className={styles.submit}
          arrow
          disabled={isEmpty}
          onClick={() => {
            !isEmpty && dispatch(chooseInterests(selectedInterests));
          }}
        >
          Confirm
        </Button>
        {/* <div
          className={styles.skip}
          onClick={() => dispatch(chooseInterests([]))}
        >
          Skip
        </div> */}
      </Preloader>
    </div>
  );
};

export { Interests };
