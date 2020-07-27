import { gql, useQuery } from '@apollo/client';

const useJobsFilterCategories = () => {
  const GET_JOBS_CATEGORIES = gql`
    {
      jobCategoriesCollection {
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
    GET_JOBS_CATEGORIES
  );

  return {
    filterCategories: filterCategories?.jobCategoriesCollection?.items,
    filterCategoriesLoading: loading
  };
};

export { useJobsFilterCategories };
