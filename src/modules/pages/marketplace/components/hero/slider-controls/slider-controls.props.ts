import { ButtonGroupProps } from 'react-multi-carousel';

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}

/**
 * Props
 */
type SliderControlsProps = CarouselButtonGroupProps & {
  /**
   * Classname
   */
  classname?: string;
};

export { SliderControlsProps };
