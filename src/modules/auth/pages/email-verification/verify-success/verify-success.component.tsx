import { Button, Icon } from '@core/components';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { VerifySuccessProps } from './verify-success.props';
import * as styles from './verify-success.scss';

/**
 * Renders VerifySuccess
 */
const VerifySuccess: React.FC<VerifySuccessProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.checkEmail}>
      <div className={styles.title}>Voila!</div>
      <div className={styles.divider} />
      <div className={styles.icon}>
        <Icon name='success-verify' />
      </div>
      <div className={styles.notification}>
        We have successfully verified the account.
      </div>
      <Button
        className={styles.button}
        arrow
        onClick={() => dispatch(navigate('/'))}
      >
        Go to home page
      </Button>
    </div>
  );
};

export { VerifySuccess };
