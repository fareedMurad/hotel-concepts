import { useQuery, gql } from '@apollo/client';

const useWhatWeTeachData = language => {
  const GET_FILTERS_CATEGORIES = gql`
    query($locale: String!) {
      courseCategoryCollection(limit: 6, locale: $locale) {
        items {
          sys {
            id
          }
          name
          description
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_FILTERS_CATEGORIES, {
    variables: { locale: language }
  });
  return {
    filtersCategoriesData: data?.courseCategoryCollection?.items,
    filtersCategoriesLoading: loading
  };
};

export { useWhatWeTeachData };
