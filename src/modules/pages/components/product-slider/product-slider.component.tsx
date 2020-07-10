import * as React from 'react';
import { ProductSliderProps } from './product-slider.props';
import * as styles from './product-slider.scss';

/**
 * Renders ProductSlider
 */
const ProductSlider: React.FC<ProductSliderProps> = ({}) => {
  return <div className={styles.productSlider}></div>;
};

export { ProductSlider };
