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
};

export { ControlsProps };
