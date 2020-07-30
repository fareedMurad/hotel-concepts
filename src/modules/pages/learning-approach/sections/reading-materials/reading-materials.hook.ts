import { gql, useQuery } from '@apollo/client';

const useReadingMaterialsData = () => {
  /**
   * query files
   */
  const GET_READING_MATERIALS = gql`
    {
      readingMaterialsForLearningAproachCollection(locale: "en-US") {
        items {
          ... on ReadingMaterialsForLearningAproach {
            file {
              fileName
              size
              url
              description
              contentType
            }
          }
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_READING_MATERIALS);
  return {
    readingData: data?.readingMaterialsForLearningAproachCollection?.items,
    readingDataLoading: loading
  };
};

export { useReadingMaterialsData };
