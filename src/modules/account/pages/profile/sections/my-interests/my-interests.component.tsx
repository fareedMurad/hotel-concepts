import { Card } from '@account/components';
import { editInterests } from '@app/redux/account';
import { Button, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMyInterestsData } from './my-interests.hook';
import { MyInterestsProps } from './my-interests.props';
import * as styles from './my-interests.scss';

/**
 * Renders MyInterests
 */
const MyInterests: React.FC<MyInterestsProps> = ({ className }) => {
  const {
    interestsList,
    selectedInterests,
    setSelectedInterests
  } = useMyInterestsData();
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  /**
   * Interests renderer
   */
  const Interests = () => {
    const preparedArray = expanded ? interestsList : selectedInterests;
    const disabled = !expanded;

    return (
      <div className={styles.interests}>
        {preparedArray
          ?.slice()
          ?.sort((a, b) => {
            const match = selectedInterests.some(one => one.value == a.value);

            if (a.label < b.label || match) {
              return -1;
            }
            if (a.label > b.label) {
              return 1;
            }
            return 0;
          })
          ?.map((interest, index) => {
            const { label, value } = interest;
            const match = selectedInterests.some(one => one.value == value);

            return (
              <div
                className={classNames(styles.interest, className, {
                  [styles.interestSelected]: match,
                  [styles.interestDisabled]: disabled
                })}
                onClick={() => {
                  if (disabled) return;

                  match
                    ? setSelectedInterests(
                        selectedInterests.filter(one => one.value != value)
                      )
                    : setSelectedInterests([...selectedInterests, interest]);
                }}
                key={index}
              >
                {label}
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <Card
      className={classNames(styles.myInterests, className)}
      title='My interests'
    >
      <Preloader id={Preloaders.profileInterests} size={75} thickness={4}>
        <div className={styles.expandable}>
          <Interests />
          {expanded && (
            <Button
              className={styles.submit}
              onClick={() => {
                dispatch(
                  editInterests(selectedInterests.map(one => one.value))
                );
                setExpanded(false);
              }}
            >
              Save
            </Button>
          )}
          <div
            className={styles.toggle}
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {expanded ? 'Hide it' : 'Add more interests'}
          </div>
        </div>
      </Preloader>
    </Card>
  );
};

export { MyInterests };
