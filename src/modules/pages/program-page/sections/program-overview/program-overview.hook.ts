import { gql, useQuery } from '@apollo/client';

const useProgramOverviewData = (programId: string) => {
  const GET_PROGRAM_OVERVIEW_DATA = gql`
    query($id: String!) {
      onlineCourse(id: $id, locale: "en-US") {
        weeks
        sprints
        enroll {
          day
          year
          months
        }
        languages
      }
    }
  `;

  return {
    GET_PROGRAM_OVERVIEW_DATA
  };
};

export { useProgramOverviewData };
