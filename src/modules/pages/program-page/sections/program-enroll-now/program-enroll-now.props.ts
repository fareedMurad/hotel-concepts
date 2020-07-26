type EnrollItem = {
  name: string;
  description: string;
  price: string;
  features: string[];
  isEnrollReady: boolean;
  isMostPopular: boolean;
};

/**
 * Props
 */
type ProgramEnrollNowProps = {
  programId: string;
};

export { ProgramEnrollNowProps };
