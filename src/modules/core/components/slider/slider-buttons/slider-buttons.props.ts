import { ButtonGroupProps } from 'react-multi-carousel/lib/types';

/**
 * Props
 */
interface SliderButtonsProps extends ButtonGroupProps {
  className?: string;
  isBordered?: boolean;
  path?: string;
  btnText?: string;
  onClick?: () => void;
  count?: number;
  setCount?: (count) => void;
}

export { SliderButtonsProps };
