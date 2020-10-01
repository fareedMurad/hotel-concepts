import { CarouselProps } from 'react-multi-carousel';

/**
 * Slider props
 */
type SliderProps = CarouselProps & {
  /**
   * Classname
   */
  className?: string;
  /**
   * Container class
   */
  containerClass?: string;
  /**
   * Item class
   */
  itemClass?: string;
  /**
   * Is dragable
   */
  draggable?: boolean;
  /**
   * Is swipeable
   */
  swipeable?: boolean;
  /**
   * Responsive
   */
  responsive?: {
    desktop?: {
      breakpoint: { max: number; min: number };
      items: number;
      slidesToSlide: number;
    };
    tablet?: {
      breakpoint: { max: number; min: number };
      items: number;
      slidesToSlide: number;
    };
    mobile?: {
      breakpoint: { max: number; min: number };
      items: number;
      slidesToSlide: number;
    };
  };
  /**
   * Autoplay
   */
  autoPlay?: boolean;
  /**
   * Autoplay speed
   */
  autoPlaySpeed?: number;
  /**
   * Should show dots
   */
  showDots?: boolean;
  /**
   * Custom dot
   */
  customDot?: any;
  /**
   * Dot Classname
   */
  dotListClass?: string;
  /**
   * Is infinite
   */
  infinite?: boolean;
  /**
   * Controls with keyboard
   */
  keyBoardControl?: boolean;
  /**
   * Custom buttons
   */
  customButtonGroup?: any;
  /**
   * (temporary)
   */
  controls?: boolean;
  /**
   * Custom controls classname
   */
  controlsClassname?: string;
  /**
   * Controls theme
   */
  controlsTheme?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Control classname
   */
  controlClassname?: string;
};

export { SliderProps };
