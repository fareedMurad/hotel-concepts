import { ControlProps } from '@core/models';

/**
 * Props
 */
type RadioProps = ControlProps & {
  /**
   * Value
   */
  value: boolean;
  /**
   * Label classname
   */
  labelClassname?: string;
};

/**
 * Radio group props
 */
type RadioGroupProps = ControlProps & {
  /**
   * Label classname
   */
  labelClassname?: string;
  /**
   * List className
   */
  listClassname?: string;
  /**
   * Radio className
   */
  radioClassname?: string;
  /**
   * Direction
   */
  direction?: 'row' | 'column';
  /**
   * Data
   */
  data: { value: string; label: string }[];
};

export { RadioProps, RadioGroupProps };
