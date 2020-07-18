import * as React from 'react';
import { NotFoundProps } from './not-found.props';
import * as styles from './not-found.scss';

/**
 * Renders NotFound
 */
const NotFound: React.FC<NotFoundProps> = ({}) => {
  return <div className={styles.notFound}>404 page not found</div>;
};

export { NotFound };
