import { Card } from '@account/components';
import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { Interests } from './components/interests';
// import { UpdatePassword } from './components/update-password';
import { useProfileData } from './profile.hook';
import * as styles from './profile.scss';
import {
  ContactAddress,
  Language,
  Newsletter,
  PaymentMethods,
  Privacy,
  UpdatePassword,
  UploadAvatar
} from './sections';

/**
 * Renders Profile
 */
const Profile: React.FC = () => {
  const { user } = useProfileData();

  return (
    <div className={styles.profile}>
      <Preloader id={Preloaders.profile}>
        <div className={styles.columnLeft}>
          <Language preferredLanguage={user?.language} />
          <ContactAddress />
        </div>

        <div className={styles.columnRight}>
          <Card className={styles.secondaryInfoInterests}>
            <Interests />
          </Card>
          <div className={styles.secondaryInfoGrid}>
            {/* <Card className={styles.secondaryInfoGridEmailPassword}>
              <UpdatePassword />
            </Card> */}
            <UpdatePassword />
            <UploadAvatar user={user} />
            {/* <Card className={styles.secondaryInfoGridPayment}>
              <PaymentMethod />
            </Card> */}
            {/* <Card className={styles.secondaryInfoGridPrivacy}>
              <Privacy />
            </Card> */}
            <PaymentMethods />
            <Privacy />
            <Newsletter />
            {/* <Card className={styles.secondaryInfoGridNewsletter}>
              <Newsletter />
            </Card> */}
          </div>
        </div>
      </Preloader>
    </div>
  );
};

export { Profile };
