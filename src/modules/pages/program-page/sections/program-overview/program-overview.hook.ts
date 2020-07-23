import { gql, useQuery } from '@apollo/client';

const useProgramOverviewData = (programId: string) => {
  const GET_PROGRAM_OVERVIEW_DATA = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
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

  const { data, loading, error } = useQuery(GET_PROGRAM_OVERVIEW_DATA, {
    variables: { id: programId }
  });

  return { data, loading };
};

export { useProgramOverviewData };
