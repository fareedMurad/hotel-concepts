import { boolean } from 'yup';

/**
 * Props
 */
type ModalHeaderProps = {
  /*
   * Set which modal visible
   */
  setActiveModal: (modal: 'login' | 'register') => void;
  /*
   * Current active modal
   */
  activeModal: 'login' | 'register';
};

export { ModalHeaderProps };
