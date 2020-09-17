/**
 * Props
 */
type AvatarProps = {
  /**
   * Avatar size
   */
  size?: number;
  /**
   * Classname
   */
  className?: string;
  /**
   * User data
   */
  user: {
    name: string;
    surname: string;
    src?: string;
  };
};

export { AvatarProps };
