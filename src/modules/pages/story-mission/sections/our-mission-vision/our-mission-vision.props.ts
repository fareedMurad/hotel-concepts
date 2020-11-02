/**
 * Props
 */
type OurMissionVisionProps = {};
/**
 * Explore program
 */
type ExploreProgramsContainerProps = {
  program: {
    rate: string;
    caption: string;
    description: string;
    id: string | number;
    link: string;
    button: string;
  };
};

export { OurMissionVisionProps, ExploreProgramsContainerProps };
