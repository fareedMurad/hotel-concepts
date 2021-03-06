/*
 * Lazy background props
 */

type LazyBackgroundProps = {
  /*
   * Class name
   */
  className?: string;
  /*
   * Reduce image
   */
  reducedImageId: string;
  /*
   * Main image
   */
  fullImageId: string;

  bgColor?: string;
};

export { LazyBackgroundProps };
