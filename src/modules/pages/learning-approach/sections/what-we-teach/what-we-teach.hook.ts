import { useQuery, gql } from '@apollo/client';

const useWhatWeTeachData = () => {
  const GET_FILTERS_CATEGORIES = gql`
    {
      courseCategoryCollection(order: sys_publishedAt_DESC) {
        total
        items {
          sys {
            id
          }
          slug
          category
          description
          coursesCollection(limit: 6) {
            total
          }
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
