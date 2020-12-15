import { Pricing } from '@app/models';
/**
 * Price hook
 */

const usePrice = (pricing: Pricing) => {
  const price = pricing?.price.USD;
  console.log(price);
  debugger;

  const discounProcent = pricing?.quantityDiscounts
    ? pricing?.quantityDiscounts[1]
    : null;
  if (!discounProcent) return { price, discountPrice: null };
  /**
   * Calculate discount
   */
  const discountPrice = Number(
    (price - (price * discounProcent) / 100).toFixed(2)
  );

  return {
    discountPrice,
    price
  };
};

export { usePrice };
