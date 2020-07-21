import { useQuery, gql } from '@apollo/client';

const useContributorsData = () => {
  /**
   * Get contributors
   */
  const GET_MENTORS = gql`
    {
      mentorCollection {
        items {
          name
          surname
          slug
          position
          city
          experience
          mentorPicture {
            url
          }
          sys {
            id
          }
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_MENTORS);

  //init
  return { contributors: data?.mentorCollection?.items, loading };
};

export { useContributorsData };
