import { gql, useQuery } from '@apollo/client';

const useProgramsMenuData = language => {
  /**
   * query categoriess of programs
   */
  const GET_CATEGORIES = gql`
    query($locale: String!) {
      courseCategoryCollection(
        limit: 6
        order: sys_firstPublishedAt_DESC
        locale: $locale
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
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: { locale: language }
  });

  return {
    programsData: data?.courseCategoryCollection?.items,
    programsLoading: loading
  };
};

export { useProgramsMenuData };
