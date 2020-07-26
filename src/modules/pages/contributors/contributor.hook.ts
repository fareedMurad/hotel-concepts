import { useQuery, gql } from '@apollo/client';

const useContributorsData = () => {
  /**
   * Get contributors
   */
  const GET_MENTORS = gql`
    {
      mentorCollection(limit: 10) {
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
      asset(id: "1jbOWs6i1nmxoA6u5Vcebf") {
        url
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_MENTORS);

  //init
  return {
    contributors: data?.mentorCollection?.items,
    loading,
    contributorsHeroImage: data?.asset?.url
  };
};

export { useContributorsData };
