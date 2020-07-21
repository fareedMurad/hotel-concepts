/**
 * Props
 */
type ProgramOverviewProps = {
  overview: {
    month: number;
    sprints: number;
    duration: { weeks: string | number; sprints: string | number };
    enrollBy: {
      day: string | number;
      year: string | number;
      month: string;
    };
    languages: string[];
  };
};

export { ProgramOverviewProps };
