import { useQuery, gql } from '@apollo/client';

const useAllJobsData = language => {
  const GET_ALL_JOBS = gql`
    query($locale: String!) {
      jobsCollection(locale: $locale) {
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
  const { data, loading, error } = useQuery(GET_ALL_JOBS, {
    variables: { locale: language }
  });

  return {
    allJobs: data?.jobsCollection,
    allJobsLoader: loading
  };
};

export { useAllJobsData };
