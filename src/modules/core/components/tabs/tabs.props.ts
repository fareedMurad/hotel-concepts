import { ControlProps } from '@core/models';

/**
 * Props
 */
type TabsProps = ControlProps & {
  data: { id: string; caption: string; description: string }[];
};

export { TabsProps };
