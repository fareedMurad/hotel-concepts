import { gql, useQuery } from '@apollo/client';

const useProgramsCatalogueData = (categoryId: string) => {
  const GET_PROGRAMS_BY_CATEGORY = gql`
    query($id: String!) {
      courseCategory(id: $id) {
        name
        description
        subtitle
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PROGRAMS_BY_CATEGORY, {
    variables: { id: categoryId }
  });
  return {
    categoryCoursesData: data?.courseCategory,
    categoryCoursesLoading: loading
  };
};

export { useProgramsCatalogueData };

// const GET_PROGRAMS_BY_CATEGORY = gql`
// // query($id: String!) {
// //   onlineCourseCollection(where: { category: { sys: { id: $id } } }) {
// //     items {
// //       name
// //       slug
// //       videoVimeoUrl
// //       description
// //       languages
// //       complexityLevel
// //       price
// //       weeks
// //       sprints
// //     }
// //   }
// // }
// // `;
