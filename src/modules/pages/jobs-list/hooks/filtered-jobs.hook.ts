import { gql, useLazyQuery } from '@apollo/client';

const useFilteredJobsData = () => {
  const GET_JOBS_BY_CATEGORY_ID = gql`
    query($id: String!, $locale: String!) {
      jobCategories(id: $id, locale: $locale) {
        linkedFrom {
          jobsCollection {
            items {
              sys {
                id
              }
              name
              employeeType
            }
          }
        }
      }
    }
  `;
  const [getData, { data, loading }] = useLazyQuery(GET_JOBS_BY_CATEGORY_ID);

  return {
    filteredJobs: data?.jobCategories?.linkedFrom?.jobsCollection?.items,
    getFilteredJobs: getData,
    filteredJobsLoader: loading
  };
};

export { useFilteredJobsData };
