import { useQuery, gql } from '@apollo/client';

const useAllJobsData = () => {
  const GET_ALL_JOBS = gql`
    {
      jobsCollection {
        total
        items {
          sys {
            id
          }
          name
          employeeType
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_ALL_JOBS);

  return {
    allJobs: data?.jobsCollection,
    allJobsLoader: loading
  };
};

export { useAllJobsData };
