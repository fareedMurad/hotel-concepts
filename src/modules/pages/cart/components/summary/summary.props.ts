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
    total: number;
    estimatedShipping: string;
    estimatedTax: string;
    onClick: () => void;
  };
};

export { SummaryProps };
