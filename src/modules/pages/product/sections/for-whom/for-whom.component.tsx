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
 * Query for whom data
 */

const GET_FORWHOM_DATA = gql`
  query($id: String!, $locale: String!) {
    product(id: $id, locale: $locale) {
      forWhom
      forWhomListOfPositions
    }
  }
`;
/**
 * Renders ForWhom
 */
const ForWhom: React.FC<ForWhomProps> = ({ productId }) => {
  const { language } = useSelector((state: State) => state.localization);
  const { data, loading } = useQuery(GET_FORWHOM_DATA, {
    variables: { id: productId, locale: language }
  });

  if (loading) return <Spinner />;
  const { product } = data;

  return (
    <section id='content' className={styles.forWhom}>
      <div className={styles.title}>
        <div>For Whom</div>
        <div>{product.forWhom}</div>
      </div>
      <div className={styles.roles}>
        {product.forWhomListOfPositions.map(role => (
          <div key={role} className={styles.role}>
            {role}
          </div>
        ))}
      </div>
    </section>
  );
};

export { ForWhom };
