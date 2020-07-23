import * as React from 'react';
import { EnrollProps } from './enroll.props';
import * as styles from './enroll.scss';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@core/components';

const GET_ENROLL_DATA = gql`
  query($id: String!) {
    onlineCourse(id: $id) {
      whoShouldEnrol {
        description
        positions
      }
    }
  }
`;
/**
 * Renders Enroll
 */
const Enroll: React.FC<EnrollProps> = ({ programId }) => {
  const { data, loading } = useQuery(GET_ENROLL_DATA, {
    variables: { id: programId }
  });

  if (loading) return <Spinner />;
  const { description, positions } = data?.onlineCourse?.whoShouldEnrol;
  return (
    <section id='content' className={styles.enroll}>
      <div className={styles.title}>
        <div>Who Should Enroll?</div>
        <div>{description}</div>
      </div>
      <div className={styles.roles}>
        {positions.map(role => (
          <div key={role} className={styles.role}>
            {role}
          </div>
        ))}
      </div>
    </section>
  );
};

export { Enroll };
