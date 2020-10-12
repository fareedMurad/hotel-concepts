import { ControlProps } from '@core/models';

/**
 * Props
 */
type CheckboxProps = Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> &
  ControlProps<boolean> & {
    /**
     * Checkbox theme
     */
    theme?: 'sm' | 'md' | 'lg';
    /**
     * Label
     */
    label?: string | any;
    /**
     * Label classname
     */
    labelClassname?: string;
    /**
     * Error classname
     */
    errorClassname?: string;
  };

/**
 * CheckboxGroup props
 */
type CheckboxGroupProps = ControlProps & {
  /**
   * Group data
   */
  data: { value: string; label: string }[];
  /**
   * Checkbox theme
   */
  theme?: 'sm' | 'md' | 'lg';
  /**
   * Value
   */
  value: string[];
};

export { CheckboxProps, CheckboxGroupProps };
