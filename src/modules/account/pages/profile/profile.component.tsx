import { Section } from '@account/components';
import { editProfile } from '@app/redux/account';
import { Button, Field, Preloader, Avatar } from '@core/components';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useProfileData } from './profile.hook';
import * as styles from './profile.scss';
import { UploadAvatar } from './components/upload-avatar';
import { profileValidationSchema } from '@account/models';
import { Hero } from '@account/components/hero';
import { Navigation } from '@account/components/navigation';
import classNames from 'classnames';
import { Language } from './components/language';
import { Interests } from './components/interests';
import { ContactAddress } from './components/contact-address';
import { UpdatePassword } from './components/update-password';
import { PaymentMethod } from './components/payment-method';
import { Privacy } from './components/privacy';
import { Newsletter } from './components/newsletter';

/**
 * Card component
 */
const Card: React.FC<{ className: string }> = ({ className, children }) => (
  <div className={classNames(styles.card, className)}>{children}</div>
);

/**
 * Renders Profile
 */
const Profile: React.FC = () => {
  const { user } = useProfileData();

  return (
    <div className={styles.profile}>
      <Preloader id={Preloaders.profile}>
        <Hero title='My account' />
        <Navigation />
        <div className={styles.profileContainer}>
          <div className={styles.mainInfo}>
            <Card className={styles.mainInfoLanguage}>
              <Language userLanguage={user?.language} />
            </Card>
            <Card className={styles.mainInfoAddress}>
              <ContactAddress />
            </Card>
          </div>

          <div className={styles.secondaryInfo}>
            <Card className={styles.secondaryInfoInterests}>
              <Interests />
            </Card>
            <div className={styles.secondaryInfoGrid}>
              <Card className={styles.secondaryInfoGridEmailPassword}>
                <UpdatePassword />
              </Card>
              <Card className={styles.secondaryInfoGridAvatar}>
                <UploadAvatar user={user} />
              </Card>
              <Card className={styles.secondaryInfoGridPayment}>
                <PaymentMethod />
              </Card>
              <Card className={styles.secondaryInfoGridPrivacy}>
                <Privacy />
              </Card>
              <Card className={styles.secondaryInfoGridNewsletter}>
                <Newsletter />
              </Card>
            </div>
          </div>
        </div>
      </Preloader>
    </div>
  );
};

export { Profile };
