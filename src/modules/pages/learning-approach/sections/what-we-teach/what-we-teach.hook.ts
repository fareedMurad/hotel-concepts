import { useQuery, gql } from '@apollo/client';

const useWhatWeTeachData = () => {
  const GET_FILTERS_CATEGORIES = gql`
    {
      courseCategoryCollection(limit: 6) {
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

  const { data, error, loading } = useQuery(GET_FILTERS_CATEGORIES);
  return {
    filtersCategoriesData: data?.courseCategoryCollection?.items,
    filtersCategoriesLoading: loading
  };
};

export { useWhatWeTeachData };
