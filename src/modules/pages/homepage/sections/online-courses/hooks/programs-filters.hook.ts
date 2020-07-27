import { gql, useQuery } from '@apollo/client';

const useProgramsFiltersData = () => {
  // get all filters
  const GET_PROGRAMS_FILTERS = gql`
    {
      courseCategoryCollection {
        items {
          sys {
            id
          }
          name
          description
          linkedFrom {
            onlineCourseCollection {
              total
            }
          }
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_PROGRAMS_FILTERS);

  return {
    programsFiltersData: data?.courseCategoryCollection?.items,
    programsFiltersLoading: loading
  };
};

export { useProgramsFiltersData };
