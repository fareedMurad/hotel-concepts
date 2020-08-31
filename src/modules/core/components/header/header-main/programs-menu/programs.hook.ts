import { gql, useQuery } from '@apollo/client';

const useProgramsMenuData = () => {
  /**
   * query categoriess of programs
   */
  const GET_CATEGORIES = gql`
    {
      courseCategoryCollection(
        limit: 6
        order: sys_firstPublishedAt_DESC
        locale: "en-US"
      ) {
        items {
          sys {
            id
          }
          name
          subtitle
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  return {
    programsData: data?.courseCategoryCollection?.items,
    programsLoading: loading
  };
};

export { useProgramsMenuData };
