import * as React from 'react';
import { ResetFormProps } from './reset-form.props';
import * as styles from './reset-form.scss';

/**
 * Renders ResetForm
 */
const ResetForm: React.FC<ResetFormProps> = ({}) => {
  return (
    <div className={styles.resetForm}>
      <div className={styles.title}>Password Reset Email Sent</div>
      <div className={styles.divider} />
    </div>
  );
};

export { ResetForm };
