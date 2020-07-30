import { useQuery, gql } from '@apollo/client';

const useContributorsData = () => {
  /**
   * Get contributors
   */
  const GET_MENTORS = gql`
    {
      mentorCollection(limit: 10, locale: "en-US") {
        items {
          name
          surname
          slug
          position
          workAt
          from
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
  console.log(data);
  //init
  return {
    contributors: data?.mentorCollection?.items,
    loading,
    contributorsHeroImage: data?.asset?.url
  };
};

export { useContributorsData };
