import { Button, Icon, Modal } from '@core/components';
import { closeModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { SuccessAlertModalProps } from './success-alert-modal.props';
import * as styles from './success-alert-modal.scss';

/**
 * Renders SuccessAlertModal
 */
const SuccessAlertModal: React.FC<SuccessAlertModalProps> = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <Modal id={Modals.success} className={styles.successAlertModal}>
      <Icon
        name='close-modal'
        className={styles.closeModal}
        onClick={() => dispatch(closeModal(Modals.success))}
      />
      <div className={styles.success}>
        <div className={styles.successTitle}>
          {t('modal-contact-us.success-alert.title')}
        </div>
        <div className={styles.successDivider} />
        <div className={styles.successHint}>
          {' '}
          {t('modal-contact-us.success-alert.hint')}
        </div>
        <Button arrow className={styles.submit}>
          {t('modal-contact-us.success-alert.button-text')}
        </Button>
      </div>
    </Modal>
  );
};

export { SuccessAlertModal };
