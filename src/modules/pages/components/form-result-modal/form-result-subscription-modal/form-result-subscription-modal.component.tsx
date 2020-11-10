import * as React from 'react';
import * as styles from './form-result-subscription-modal.scss';
import { FormResultSubscriptionModalProps } from './form-result-subscription-modal.props';
import { Icon } from '@core/components/icon/icon.component';
import { Modal } from '@core/components/modal/modal.component';
import { Modals } from '@ui/models';
import { closeModal } from '@ui/modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

/**
 * Renders FormResultSubscriptionModal
 */
const FormResultSubscriptionModal: React.FC<FormResultSubscriptionModalProps> = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();
  const { pathname } = history.location;
  console.log(pathname);
  const message = pathname.includes('insights') ? 'insights' : 'newsletter';
  return (
    <Modal
      id={Modals.formResultSubscription}
      className={styles.successAlertModal}
    >
      <Icon
        name='close-modal'
        className={styles.closeModal}
        onClick={() => dispatch(closeModal(Modals.formResultSubscription))}
      />
      <div className={styles.success}>
        <div className={styles.successTitle}>
          {t('modal-contact-us.success-alert.title')}
        </div>
        <div className={styles.successDivider} />
        <div className={styles.successHint}>
          Thanks for subscribing to our {message}
        </div>
      </div>
    </Modal>
  );
};

export { FormResultSubscriptionModal };
