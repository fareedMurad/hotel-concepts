/**
 * Props
 */
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /**
   * Is button disabled
   */
  disabled?: boolean;
  /**
   * Button themes
   */
  theme?: 'primary' | 'secondary';
  /**
   * Button sizes
   */
  size?: 'lg' | 'md' | 'sm';
  /**
   * Arrow
   */
  arrow?: boolean;
  /**
   * Button width
   */
  width?: any;
};

export { ButtonProps };
