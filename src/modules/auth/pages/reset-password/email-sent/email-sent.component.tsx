import { Button, Icon } from '@core/components';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { EmailSentProps } from './email-sent.props';
import * as styles from './email-sent.scss';

/**
 * Renders EmailSent
 */
const EmailSent: React.FC<EmailSentProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.emailSent}>
      <div className={styles.title}>Password Reset Email Sent</div>
      <div className={styles.divider} />
      <div className={styles.icon}>
        <Icon name='verify-success' />
      </div>
      <div className={styles.subtitle}>
        An email has been sent to your email address.
      </div>
      <div className={styles.hint}>
        Please follow the directions in the email to reset your password. If you
        do not receive this email, please check your spam folder or make sure
        this email address is registered with Kordie.
      </div>
      <Button
        className={styles.button}
        arrow
        onClick={() => dispatch(navigate('/'))}
      >
        Go to Homepage
      </Button>
    </div>
  );
};

export { EmailSent };
