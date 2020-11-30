import { Modals } from '@ui/models';

/**
 * Props
 */
type ModalProps = {
  /**
   * Modal id
   */
  id?: Modals;
  /**
   * Classname
   */
  className?: string;
  /**
   * Is loader active
   */
  isActive?: boolean;
  /**
   * Go to previous route
   */
  historyGoBack?: boolean;
  /**
   * With overlay
   */
  withOverlay?: boolean;
  /**
   * onClose
   */
  onClose?: () => void;

  /*
   * No reset animation
   */
  noReset?: boolean;
};

export { ModalProps };
