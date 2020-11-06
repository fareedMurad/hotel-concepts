import { SingleProgramModel } from '@app/models/single-program';
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
  data: SingleProgramModel;
  /**
   * Program id
   */
  programId: string;
  /**
   * Is in cart ?
   */
  inCart?: boolean;
};

export { ProgramEnrollNowProps };
