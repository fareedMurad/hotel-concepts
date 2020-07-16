/**
 * Props
 */
type ProgramIntroProps = {
  introInfo: {
    name: string,
    description: string,
    videoInfo?: {
      path: string,
      time: string
    }
  }
};

export { ProgramIntroProps };
