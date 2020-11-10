import { Preloaders } from '@ui/models';

/**
 * Props
 */
type PreloaderProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Preloader id
   */
  id?: Preloaders;
  /**
   * Children
   */
  children?: any;
  /**
   * Is loader active
   */
  isActive?: boolean;
  /**
   * Size
   */
  size?: number;
  /**
   * Border thickness
   */
  thickness?: number;
  /*
   * Overlay cover screen
   */
  cover?: boolean;
};

export { PreloaderProps };
