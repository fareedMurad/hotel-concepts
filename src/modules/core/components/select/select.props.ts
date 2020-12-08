import { ControlProps, Option } from '@core/models';
import { Styles } from 'react-select';

/**
 * Props
 */
type SelectProps = ControlProps & {
  /**
   * Get option name
   */
  getOptionValue?: (option: Option) => Option['value'];
  /**
   * Options list
   */
  options: Option[];
  /**
   * Is search enabled
   */
  searchable?: boolean;
  /*
   * Theme
   */
  theme?: 'primary' | 'secondary';
  /*
   * Alow search
   */
  allowSearch?: boolean;
  /*
   * Label className
   */
  labelClassname?: string;
  /*
   * constrol className
   */
  controlClassname?: string;
  /*
   * Default value
   */
  defaultLabel?: string;
};

export { SelectProps };
