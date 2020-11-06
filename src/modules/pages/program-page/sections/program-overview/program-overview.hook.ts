import { gql, useQuery } from '@apollo/client';

const useProgramOverviewData = (programId: string, language) => {
  const GET_PROGRAM_OVERVIEW_DATA = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
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
