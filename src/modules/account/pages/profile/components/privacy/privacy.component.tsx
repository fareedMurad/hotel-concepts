import * as React from 'react';
import { PrivacyProps } from './privacy.props';
import * as styles from './privacy.scss';

/**
 * Renders Privacy
 */
const Privacy: React.FC<PrivacyProps> = ({}) => {
  return (
    <React.Fragment>
      <div className={styles.title}>Privacy</div>
      <div className={styles.description}>
        By using our service, you agree to our privacy policy.
      </div>
      <div>For more information contact us.</div>
    </React.Fragment>
  );
};

export { Privacy };
