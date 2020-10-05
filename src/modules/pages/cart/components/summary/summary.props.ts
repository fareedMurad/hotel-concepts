/**
 * Props
 */
type SummaryProps = {
  /**
   * Classname
   */
  className?: string;
  /**
   * Summary data
   */
  summaryData: {
    total: string;
    estimatedShipping: string;
    estimatedTax: string;
  };
};

export { SummaryProps };
