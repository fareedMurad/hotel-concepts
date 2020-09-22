import { ControlProps } from '@core/models';
/**
 * Props
 */
type RadioProps = ControlProps & {
  data: { value: string; label: string }[];
  direction: 'row' | 'column';
};

export { RadioProps };
