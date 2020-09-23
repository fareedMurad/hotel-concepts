import { Card } from '@account/components';
import { Icon } from '@core/components';
import classNames from 'classnames';
import * as React from 'react';
import { PrivacyProps } from './privacy.props';
import * as styles from './privacy.scss';

/**
 * Renders Privacy
 */
const Privacy: React.FC<PrivacyProps> = ({ className }) => (
  <Card
    className={classNames(styles.privacy, className)}
    title='Privacy'
    offsetTop={20}
  >
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
  </Card>
);

export { Privacy };
