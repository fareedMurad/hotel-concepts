import * as React from 'react';
import { PrivacyProps } from './privacy.props';
import * as styles from './privacy.scss';
import { EmailIcon } from 'react-share';
import { Icon } from '@core/components';

/**
 * Renders Privacy
 */
const Privacy: React.FC<PrivacyProps> = ({}) => {
  return (
    <React.Fragment>
      <div className={styles.title}>Privacy</div>
      <div className={styles.description}>
        <div>By using our service, you agree to our privacy policy.</div>
        <div>For more information contact us.</div>
      </div>

      <div className={styles.email}>
        <div className={styles.emailIcon}>
          <Icon name='email-icon' />
        </div>
        <a href='mailto: info@kordie.com'>info@kordie.com </a>
      </div>
    </React.Fragment>
  );
};

export { Privacy };
