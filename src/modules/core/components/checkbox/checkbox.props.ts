import { ControlProps } from '@core/models';

/**
 * Props
 */
type CheckboxProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
  ControlProps<boolean> & {
    /**
     * Checkbox theme
     */
    theme?: 'sm' | 'md' | 'lg';
    /**
     * Label classname
     */
    labelClassname?: string;
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
