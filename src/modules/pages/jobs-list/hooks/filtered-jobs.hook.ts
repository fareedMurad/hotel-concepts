import { gql, useLazyQuery } from '@apollo/client';

const useFilteredJobsData = () => {
  const GET_JOBS_BY_CATEGORY_ID = gql`
    query($id: String!) {
      jobCategories(id: $id) {
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
