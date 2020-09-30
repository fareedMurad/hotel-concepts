/**
 * Slider props
 */
type SliderProps = {
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
  responsive?: any;
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
};

export { SliderProps };
