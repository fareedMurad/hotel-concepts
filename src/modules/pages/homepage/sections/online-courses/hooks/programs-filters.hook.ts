import { gql, useQuery } from '@apollo/client';

const useProgramsFiltersData = language => {
  // get all filters
  const GET_PROGRAMS_FILTERS = gql`
    query($locale: String!) {
      courseCategoryCollection(
        order: sys_firstPublishedAt_DESC
        locale: $locale
      ) {
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
  const { data, loading, error } = useQuery(GET_PROGRAMS_FILTERS, {
    variables: { locale: language }
  });

  return {
    programsFiltersData: data?.courseCategoryCollection?.items,
    programsFiltersLoading: loading
  };
};

export { useProgramsFiltersData };
