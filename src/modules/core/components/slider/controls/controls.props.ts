import { ButtonGroupProps } from 'react-multi-carousel';

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}

/**
 * Props
 */
type ControlsProps = CarouselButtonGroupProps & {
  /**
   * Classname
   */
  className?: string;
  /**
   * Theme
   */
  theme?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Control classname
   */
  controlClassname?: string;
  /*
   * Count
   */
  count?: number;
  /*
   * Set count
   */
  setCount?: (count) => void;
};

export { ControlsProps };
