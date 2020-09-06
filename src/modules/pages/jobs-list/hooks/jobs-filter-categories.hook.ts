import { gql, useQuery } from '@apollo/client';

const useJobsFilterCategories = language => {
  const GET_JOBS_CATEGORIES = gql`
    query($locale: String!) {
      jobCategoriesCollection(locale: $locale) {
        items {
          category
          sys {
            id
          }
          linkedFrom {
            jobsCollection {
              total
            }
          }
        }
      }
    }
  `;

  const { data: filterCategories, loading, error } = useQuery(
    GET_JOBS_CATEGORIES,
    {
      variables: { locale: language }
    }
  );

  return {
    filterCategories: filterCategories?.jobCategoriesCollection?.items,
    filterCategoriesLoading: loading
  };
};

export { useJobsFilterCategories };
