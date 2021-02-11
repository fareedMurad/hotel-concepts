/**
 * Props
 */
type WatchButtonProps = {
  time: string;
  titleText: string;
  className?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  theme?: 'primary' | 'secondary';
};

export { WatchButtonProps };
