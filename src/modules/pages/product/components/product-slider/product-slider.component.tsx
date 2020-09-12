import * as React from 'react';
import { ProductSliderProps } from './product-slider.props';
import * as styles from './product-slider.scss';
import Carousel from 'react-multi-carousel';
import { ButtonGroupProps, DotProps } from 'react-multi-carousel/lib/types';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { useMarketplaceData } from '@pages/marketplace/hooks/marketplace.hook';
import { Icon, Button } from '@core/components';
import classNames from 'classnames';
import { useProductsData } from '@pages/marketplace/hooks/marketplace-products.hook';
import { useParams } from 'react-router';
import { useProductData } from '@pages/product/hooks/product.hook';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { showModal, toggleBookPreviewModal } from '@ui/modal';
import { Modals } from '@ui/models';

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}
/**
 * Renders ProductSlider
 */
// const responsive = {
//   superLargeDesktop: {
//     the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

/**
 * Custom Dots
 */

// const CustomDot: React.FC<any> = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     index,
//     active,
//     carouselState: { currentSlide, deviceType },
//     images
//   } = rest;
//   const carouselItems = images.map(el => {
//     return <div />;
//   });
//   onMove means if dragging or swiping in progress.
//   active is provided by this lib for checking if the item is active or not.
//   return (
//     <div
//       className={active ? styles.activeDot : styles.inactiveDot}
//       onClick={() => onClick()}
//     >
//       {React.Children.toArray(carouselItems)[index]}
//     </div>
//   );
// };

/**
 * Custom Arrows
 */

// const CustomLefttArrow: React.FC<any> = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType }
//   } = rest;

//   return (
//     <Icon
//       name='arrow-slider'
//       className={classNames(styles.arrowLeft, styles.arrow)}
//       onClick={() => onClick()}
//     />
//   );
// };

// const CustomRightArrow: React.FC<any> = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType }
//   } = rest;

//   return (
//     <Icon
//       name='arrow-slider'
//       className={classNames(styles.arrowRight, styles.arrow)}
//       onClick={() => onClick()}
//     />
//   );
// };

const ProductSlider: React.FC<ProductSliderProps> = ({
  url,
  productPreview
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className={styles.productImage}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={url} alt='' width='' />
        <Button
          theme='secondary'
          onClick={() => {
            dispatch(toggleBookPreviewModal(true));
            dispatch(showModal(Modals.bookPreview));
          }}
        >
          {t('product.slider.button-text')}
        </Button>
      </div>
    </div>
  );
};

export { ProductSlider };
