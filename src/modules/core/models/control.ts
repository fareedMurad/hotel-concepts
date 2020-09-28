import { ReactNode } from 'react';

/**
 * Formik
 */
type ControlProps<V = string | string[] | boolean> = {
  /**
   * Html id
   */
  id?: string;
  /**
   * Control value
   */
  value: V;
  /**
   * Control label
   */
  label?: ReactNode;
  /**
   * Root classname
   */
  className?: string;
  /***
   * Is form control disabled
   */
  disabled?: boolean;
  /**
   * Field error
   */
  error?: ReactNode;
  /**
   * Is has error
   */
  isError?: boolean;
  /**
   * Placeholder
   */
  placeholder?: React.ReactNode;
  /**
   * Is Field required
   */
  required?: boolean;
  /**
   * Change handler
   */
  onChange?: (value: V) => void;
  /**
   * Control tabindex
   */
  tabIndex?: number;
  /**
   * is Background white
   */
  whiteBackground?: boolean;
  /*
   * Description for tabs
   */
  description?: string;
};

export { ControlProps };
