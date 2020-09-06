import { gql, useQuery } from '@apollo/client';

const useReadingMaterialsData = language => {
  /**
   * query files
   */
  const GET_READING_MATERIALS = gql`
    query($locale: String!) {
      readingMaterialsForLearningAproachCollection(locale: $locale) {
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
  const { data, loading, error } = useQuery(GET_READING_MATERIALS, {
    variables: { locale: language }
  });
  return {
    readingData: data?.readingMaterialsForLearningAproachCollection?.items,
    readingDataLoading: loading
  };
};

export { useReadingMaterialsData };
