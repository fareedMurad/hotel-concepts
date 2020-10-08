import { State } from '@app/redux/state';
import { Spinner } from '@core/components';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NotFoundProps } from './not-found.props';
import * as styles from './not-found.scss';

/**
 * Renders NotFound
 */
const NotFound: React.FC<NotFoundProps> = ({}) => {
  const { location } = useSelector((state: State) => state.router);
  return location?.pathname.includes('account/profile') ? (
    <Spinner />
  ) : (
    <div className={styles.notFound}>404 page not found</div>
  );
};

export { NotFound };
