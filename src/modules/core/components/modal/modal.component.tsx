import * as React from 'react';
import { ModalProps } from './modal.props';
import * as styles from './modal.scss';
import classNames from 'classnames';
import { useRef } from 'react';
import { State } from '@app/redux/state';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '@ui/modal';
import { useMediaPoints, useClickOutside } from '@core/shared';
import { useHistory } from 'react-router';

/**
 * Renders Modal
 */
const Modal: React.FC<ModalProps> = ({ id, className, children, ...props }) => {
  const dispatch = useDispatch();
  const { mobile } = useMediaPoints();
  const { active } = useSelector((state: State) => state.ui.modal);
  const isActive =
    'isActive' in props ? props.isActive : active.some(one => one == id);
  const modalRef = useRef();
  const history = useHistory();

  useClickOutside(modalRef, () => {
    dispatch(closeModal(id));
    !mobile && history.goBack();
  });

  const Content = () => (
    <div className={classNames(className, styles.modal)} ref={modalRef}>
      <div className={styles.content}>{children}</div>
    </div>
  );

  if (isActive) {
    return (
      <div className={styles.overlay}>
        <Content />
      </div>
    );
  }

  return mobile ? <Content /> : null;
};

export { Modal };
