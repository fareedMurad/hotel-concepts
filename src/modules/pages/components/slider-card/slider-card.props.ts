/**
 * Props
 */
type SliderCardProps = {
  img?: any;
  name?: string;
  price?: string;
  author?: string;
  id: string | number;
  onClick: () => void;
  className?: string;
  categorySlug?: string;
};

export { SliderCardProps };
