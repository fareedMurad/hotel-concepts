import { confirmationEmailResend, verifyEmailResend } from '@app/redux/auth';
import { NewEmailModal } from '@auth/modals/new-email-modal';
import { Button, Icon, Modal, Preloader } from '@core/components';
import { showModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { VerifyPendingProps } from './verify-pending-props';
import * as styles from './verify-pending.scss';
import { parse } from 'query-string';

/**
 * Renders VerifyPending
 */
const VerifyPending: React.FC<VerifyPendingProps> = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();
  const {
    location: { search }
  } = history || {};
  const { email } = parse(search);

  return (
    <div className={styles.checkEmail}>
      <Preloader id={Preloaders.confirmationEmailResend}>
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
          onClick={() => dispatch(confirmationEmailResend(email))}
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
      </Preloader>
    </div>
  );
};

export { VerifyPending };
