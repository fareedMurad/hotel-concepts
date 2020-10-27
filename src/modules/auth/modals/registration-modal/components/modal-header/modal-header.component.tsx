import { Sso } from '@auth/components';
import * as React from 'react';
import { ModalHeaderProps } from './modal-header.props';
import * as styles from './modal-header.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';
import { Modals } from '@ui/models';
import { closeModal } from '@ui/modal';

/**
 * Renders ModalHeader
 */
const ModalHeader: React.FC<ModalHeaderProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.modalHeader}>
      <div className={styles.header}>
        <div
          onClick={() => {
            dispatch(closeModal(Modals.registration));
            dispatch(navigate('/auth/register'));
          }}
          className={styles.link}
        >
          Register
        </div>
        <div
          className={classNames(styles.link, {
            [styles.linkActive]: true
          })}
        >
          Log in
        </div>
      </div>
      <div className={styles.title}>Log in to your account</div>
      <div className={styles.description}>
        Build skills for today, tomorrow, and beyond. Education to future-proof
        your career.
      </div>
      <Sso className={styles.socials} isLogin />
      <div className={styles.separator}>
        <span className={styles.separatorLine} />
        <span className={styles.separatorCaption}>Or</span>
        <span className={styles.separatorLine} />
      </div>
    </div>
  );
};

export { ModalHeader };
