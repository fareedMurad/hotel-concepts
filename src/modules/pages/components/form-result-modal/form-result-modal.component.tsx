import * as React from 'react';
import * as styles from './form-result-modal.scss';
import { Modal, Icon } from '@core/components';
import { FormResultModalProps } from './form-result-modal.props';
import { Modals } from '@ui/models';
import { closeModal } from '@ui/modal';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

/**
 * Renders FormResultModal
 */
const FormResultModal: React.FC<FormResultModalProps> = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
        <div className={styles.successHint}>
          {' '}
          {t('modal-contact-us.success-alert.hint')}
        </div>
      </div>
    </Modal>
  );
};

export { FormResultModal };
