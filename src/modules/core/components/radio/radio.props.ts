import { ControlProps } from '@core/models';
/**
 * Props
 */
type RadioProps = ControlProps & {
  data: { id: string; caption: string }[];
  direction: 'row' | 'column';
};

export { RadioProps };
