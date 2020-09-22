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
import { useSpring, animated } from 'react-spring';

/**
 * Renders Modal
 */
const Modal: React.FC<ModalProps> = ({
  id,
  className,
  children,
  historyGoBack,
  ...props
}) => {
  const contetnAnimation = useSpring({
    from: { transform: 'scale(0.8)' },
    to: { transform: 'scale(1)' }
  });
  const overlayAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  const dispatch = useDispatch();
  const { mobile } = useMediaPoints();
  const { active } = useSelector((state: State) => state.ui.modal);
  const isActive =
    'isActive' in props ? props.isActive : active.some(one => one == id);
  const modalRef = useRef();
  const history = useHistory();

  useClickOutside(modalRef, () => {
    dispatch(closeModal(id));
    dispatch(toogleContributorModal(false));
    dispatch(toggleBookPreviewModal(false));
    dispatch(toggleBookOverviewModal(false));
    !mobile && historyGoBack && history.goBack();
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

  if (isActive) {
    return (
      <animated.div style={overlayAnimation} className={styles.overlay}>
        <Content />
      </animated.div>
    );
  }

  return mobile ? <Content /> : null;
};

export { Modal };
