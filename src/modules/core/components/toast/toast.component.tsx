import * as React from 'react';
import * as styles from './toast.scss';
import { useToastData } from './toast.hook';
import classNames from 'classnames';
import { Icon } from '../icon';
import { capitalize } from '@core/shared';

/**
 * Renders Toast
 */
const Toast: React.FC = () => {
  const { status, description } = useToastData();

  const success = status == 'success';

  return (
    <div
      className={classNames(styles.toast, styles['toast' + capitalize(status)])}
    >
      <Icon className={styles.icon} name={success ? 'success' : 'fail'} />
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export { Toast };
