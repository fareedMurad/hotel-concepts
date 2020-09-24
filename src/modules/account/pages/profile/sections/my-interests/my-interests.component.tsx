import { Card } from '@account/components';
import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useMyInterestsData } from './my-interests.hook';
import { MyInterestsProps } from './my-interests.props';
import * as styles from './my-interests.scss';

/**
 * Renders MyInterests
 */
const MyInterests: React.FC<MyInterestsProps> = ({ className }) => {
  const { user } = useMyInterestsData();
  const dispatch = useDispatch();

  return (
    <Card className={classNames(styles.myInterests, className)}>
      <Preloader id={Preloaders.profileInterests} size={75} thickness={4}>
        kek
      </Preloader>
    </Card>
  );
};

export { MyInterests };
