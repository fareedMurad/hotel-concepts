import * as React from 'react';
import * as styles from './form-result-modal.scss';
import { FormResultModalProps } from './form-result-modal.props';
import { Icon } from '@core/components/icon';
import { Modal } from '@core/components/modal/modal.component';
import { Modals } from '@ui/models/modal';
import { closeModal } from '@ui/modal/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

/**
 * Renders FormResultModal
 */
const FormResultModal: React.FC<FormResultModalProps> = ({ subscription }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();
  const { pathname } = history.location;

  const message = () => {
    if (pathname.includes('contributors')) {
      return 'Your request has been submitted. We will get back to you soon';
    }
    if (pathname.includes('about-us')) {
      return 'Your request has been submitted. We will get in touch soon';
    }
    if (pathname.includes('for-companies')) {
      return 'Your request has been submitted. We will get in touch soon';
    }
    if (pathname.includes('insights')) {
      return 'Thanks for subscribing to our insights';
    }
    if (subscription) {
      return 'Thanks for subscribing to our newsletter';
    }
    if (pathname.includes('/')) {
      return 'Thank you for sign up';
    }
    return 'Your request has been submitted. We will get in touch soon';
  };

  return (
    <Modal id={Modals.formResult} className={styles.successAlertModal}>
      <Icon
        name='close-modal'
        className={styles.closeModal}
        onClick={() => dispatch(closeModal(Modals.formResult))}
      />
      <div className={styles.success}>
        <div className={styles.successTitle}>
          {t('modal-contact-us.success-alert.title')}
        </div>
        <div className={styles.successDivider} />
        <div className={styles.successHint}>{message()}</div>
      </div>
    </Modal>
  );
};

FormResultModal.defaultProps = {
  subscription: false
};

export { FormResultModal };
