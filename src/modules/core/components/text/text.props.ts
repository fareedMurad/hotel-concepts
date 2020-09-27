import { ControlProps } from '../../models';

/**
 * Props
 */
type TextProps = ControlProps & {
  /**
   * Value
   */
  value: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input type
   */
  type?: 'text' | 'password' | 'email' | 'phone' | 'file' | 'select';
  /**
   * Input mask
   */
  mask?: string;
  /**
   * Ref
   */
  ref?: any;
  /*
   *Auto complete
   */
  autoComplete?: 'on' | 'off' | 'new-password';
};

export { TextProps };
