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
import { EmailPassword } from './components/email-password';
import { PaymentMethod } from './components/payment-method';
import { Privacy } from './components/privacy';
import { Newsletter } from './components/newsletter';

/**
 * Card component
 */
const Card: React.FC<{ className: string }> = ({ className, children }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};

/**
 * Renders Profile
 */
const Profile: React.FC = () => {
  const { user, defaultValues } = useProfileData();
  const { name, surname, avatar } = user || {};
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Hero title='My account' />
      <Navigation />
      <div className={styles.profileContainer}>
        <Card className={styles.profileContainerLanguage}>
          <Language />
        </Card>
        <Card className={styles.profileContainerInterests}>
          <Interests />
        </Card>
        <Card className={styles.profileContainerAddress}>
          <ContactAddress />
        </Card>
        <Card className={styles.profileContainerEmailPassword}>
          <EmailPassword />
        </Card>
        <Card className={styles.profileContainerAvatar}>
          <UploadAvatar user={user} />
        </Card>
        <Card className={styles.profileContainerPayment}>
          <PaymentMethod />
        </Card>
        <Card className={styles.profileContainerPrivacy}>
          <Privacy />
        </Card>
        <Card className={styles.profileContainerNewsletter}>
          <Newsletter />
        </Card>
      </div>
    </React.Fragment>
  );
};

export { Profile };
