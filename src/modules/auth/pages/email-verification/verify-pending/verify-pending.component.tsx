import { verifyEmailResend } from '@app/redux/auth';
import { NewEmailModal } from '@auth/modals/new-email-modal';
import { Button, Icon, Modal } from '@core/components';
import { showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { VerifyPendingProps } from './verify-pending-props';
import * as styles from './verify-pending.scss';

/**
 * Renders VerifyPending
 */
const VerifyPending: React.FC<VerifyPendingProps> = ({ isNewEmail, token }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className={styles.checkEmail}>
      <div className={styles.title}>{t('verify-pending.title')}</div>
      <div className={styles.divider} />
      <div className={styles.icon}>
        <Icon name='verify-email' />
      </div>
      <div className={styles.notification}>
        {t('verify-pending.notification')}
      </div>
      <div className={styles.email}> {t('verify-pending.email')}</div>
      <div className={styles.hint}>{t('verify-pending.hint')}</div>
      <Button
        className={styles.button}
        arrow
        onClick={() => dispatch(verifyEmailResend({ token, isNewEmail }))}
      >
        {t('verify-pending.button-text-resend')}
      </Button>
      <Button
        className={styles.button}
        arrow
        theme='secondary'
        onClick={() => dispatch(showModal(Modals.newEmail))}
      >
        {t('verify-pending.button-text-email')}
      </Button>
      <NewEmailModal />
    </div>
  );
};

export { VerifyPending };
