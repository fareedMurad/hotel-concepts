import * as React from 'react';
import { ModalProps } from './modal.props';
import * as styles from './modal.scss';
import classNames from 'classnames';
import { useRef } from 'react';
import { State } from '@app/redux/state';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeModal,
  toogleContributorModal,
  toggleBookPreviewModal,
  toggleBookOverviewModal
} from '@ui/modal';
import { useMediaPoints, useClickOutside } from '@core/shared';
import { useHistory } from 'react-router';
import { useSpring, animated, useTransition } from 'react-spring';
import { useState } from 'react';

/**
 * Renders Modal
 */
const Modal: React.FC<ModalProps> = ({
  id,
  className,
  children,
  withOverlay,
  onClose,
  historyGoBack,
  noReset,
  ...props
}) => {
  const { active } = useSelector((state: State) => state.ui.modal);

  const overlayAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  const dispatch = useDispatch();
  const { mobile } = useMediaPoints();

  const isActive =
    'isActive' in props ? props.isActive : active.some(one => one == id);
  const modalRef = useRef();
  const history = useHistory();

  console.log('fire');

  const contetnAnimation = useSpring({
    from: { transform: 'translateY(-100vh)' },
    to: { transform: 'translateY(0)' },
    reset: noReset ? false : true
  });

  useClickOutside(modalRef, () => {
    dispatch(closeModal(id));
    onClose && onClose();
    // dispatch(toogleContributorModal(false));
    dispatch(toggleBookPreviewModal(false));
    dispatch(toggleBookOverviewModal(false));
  });

  const Content = () => (
    <animated.div
      style={contetnAnimation}
      className={classNames(className, styles.modal, {
        [styles.modalMobile]: mobile
      })}
      ref={modalRef}
    >
      <div className={styles.content}>{children}</div>
    </animated.div>
  );

  return (
    isActive && (
      <animated.div
        style={overlayAnimation}
        className={classNames(styles.overlay, {
          [styles.overlayVisible]: withOverlay
        })}
      >
        <Content />
      </animated.div>
    )
  );
};

// return null;

/**
 * Default props
 */
Modal.defaultProps = {
  withOverlay: false
};

export { Modal };
