import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { useProfileData } from './profile.hook';
import * as styles from './profile.scss';
import {
  ContactAddress,
  Language,
  MyInterests,
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
          <Language />
          <ContactAddress />
        </div>

        <div className={styles.columnRight}>
          <MyInterests className={styles.columnRightInterests} />
          <div className={styles.columnBottom}>
            <UpdatePassword className={styles.columnBottomEmailPassword} />
            <UploadAvatar className={styles.columnBottomAvatar} />
            <PaymentMethods className={styles.columnBottomPayment} />
            <Privacy className={styles.columnBottomPrivacy} />
            <Newsletter className={styles.columnBottomNewsletter} />
          </div>
        </div>
      </Preloader>
    </div>
  );
};

export { Profile };
