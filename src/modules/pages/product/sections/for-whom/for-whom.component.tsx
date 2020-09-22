import * as React from 'react';
import { ForWhomProps } from './for-whom.props';
import * as styles from './for-whom.scss';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { useEnrollData } from '@pages/program-page/sections/enroll/enroll.hook';
import { Spinner } from '@core/components';
import { title } from 'process';
import { gql, useQuery } from '@apollo/client';

/**
 * Renders ForWhom
 */
const ForWhom: React.FC<ForWhomProps> = ({
  forWhom,
  forWhomListOfPositions
}) => {
  const { language } = useSelector((state: State) => state.localization);

  return (
    <section id='content' className={styles.forWhom}>
      <div className={styles.title}>
        <div>For whom</div>
        <div>{forWhom}</div>
      </div>
      <div className={styles.roles}>
        {forWhomListOfPositions.map((role, idx) => (
          <div key={idx} className={styles.role}>
            {role}
          </div>
        ))}
      </div>
    </section>
  );
};

export { ForWhom };
