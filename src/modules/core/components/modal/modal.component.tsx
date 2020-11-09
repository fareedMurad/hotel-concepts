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
  ...props
}) => {
  const { active } = useSelector((state: State) => state.ui.modal);
  const contetnAnimation = useTransition(active[0] === id, null, {
    from: { transform: 'translateY(-100vh)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'scale(0.8)' }
  });
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

  useClickOutside(modalRef, () => {
    dispatch(closeModal(id));
    onClose && onClose();
    // dispatch(toogleContributorModal(false));
    dispatch(toggleBookPreviewModal(false));
    dispatch(toggleBookOverviewModal(false));
  });

  const Content = () => (
    // <React.Fragment>
    //   {contetnAnimation.map(({ item, props, key }) => (
    <animated.div
      // key={key}
      // style={props}
      className={classNames(className, styles.modal, {
        [styles.modalMobile]: mobile
      })}
      ref={modalRef}
    >
      <div className={styles.content}>{children}</div>
    </animated.div>
    //   ))}
    // </React.Fragment>
  );
  if (isActive) {
    return (
      <animated.div
        // style={overlayAnimation}
        className={classNames(styles.overlay, {
          [styles.overlayVisible]: withOverlay
        })}
      >
        <Content />
      </animated.div>
    );
  }

  return null;
};

/**
 * Default props
 */
Modal.defaultProps = {
  withOverlay: false
};

export { Modal };
