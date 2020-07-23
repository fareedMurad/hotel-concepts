import { gql, useLazyQuery } from '@apollo/client';

const useFilteredJobsData = () => {
  const GET_JOBS_BY_CATEGORY_ID = gql`
    query($id: String!) {
      jobCategories(id: $id) {
        jobsCollection {
          items {
            sys {
              id
            }
            name
            jobTime
          }
        }
      }
    }
  `;
  const [getData, { data, loading }] = useLazyQuery(GET_JOBS_BY_CATEGORY_ID);

  return {
    filteredJobs: data?.jobCategories?.jobsCollection?.items,
    getFilteredJobs: getData,
    filteredJobsLoader: loading
  };
};

export { useFilteredJobsData };
