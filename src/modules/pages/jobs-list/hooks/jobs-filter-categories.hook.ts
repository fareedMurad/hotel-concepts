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
          jobsCollection {
            total
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
    filterCategoriesLoader: loading
  };
};

export { useJobsFilterCategories };
