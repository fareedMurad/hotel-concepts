/**
 * Price hook
 */

const usePrice = (price: number, discounProcent: number) => {
  if (!discounProcent) return { discountPrice: null };
  /**
   * Calculate discount
   */
  const discountPrice = Number(
    (price - (price * discounProcent) / 100).toFixed(2)
  );

  return { discountPrice };
};

export { usePrice };
