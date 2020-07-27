import { gql, useQuery } from '@apollo/client';

const useCatalogueProgramsData = (categoryId: string) => {
  const GET_CATEGORY_PROGRAMS = gql`
    query($id: String!) {
      onlineCourseCollection(where: { category: { sys: { id: $id } } }) {
        items {
          name
          slug
          videoVimeoUrl
          description
          languages
          complexityLevel
          price
          weeks
          sprints
          subfilters
          courseImage {
            url
          }
          sys {
            id
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_CATEGORY_PROGRAMS, {
    variables: { id: categoryId }
  });

  return {
    catalogueProgramsData: data?.onlineCourseCollection?.items,
    catalogueProgramsLoading: loading
  };
};

export { useCatalogueProgramsData };
