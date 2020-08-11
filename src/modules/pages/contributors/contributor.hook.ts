import { useQuery, gql } from '@apollo/client';

const useContributorsData = () => {
  /**
   * Get contributors
   */
  const GET_MENTORS = gql`
    {
      mentorCollection(locale: "en-US") {
        items {
          name
          surname
          slug
          position
          workAt
          from
          experience
          mentorPicture {
            url(
              transform: {
                format: JPG_PROGRESSIVE
                width: 1600
                height: 800
                resizeStrategy: FIT
              }
            )
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

  return {
    contributors: data?.mentorCollection?.items,
    loading,
    contributorsHeroImage: data?.asset?.url
  };
};

export { useContributorsData };
