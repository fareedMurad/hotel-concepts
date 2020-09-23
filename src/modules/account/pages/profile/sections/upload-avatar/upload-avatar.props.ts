/**
 * Props
 */
type UploadAvatarProps = {
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
    avatar?: string;
  };
};

export { UploadAvatarProps };
