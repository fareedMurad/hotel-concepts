import { ControlProps } from '@core/models';

/**
 * Props
 */
type TextareaProps = ControlProps & {
  /**
   * Value
   */
  value: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Ref
   */
  ref?: any;

  /*
   * Theme
   */
  theme?: 'primary' | 'secondary';
};

export { TextareaProps };
