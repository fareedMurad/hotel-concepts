import { gql, useQuery } from '@apollo/client';
/**
 * Query testimonials
 */
const useProgramPageDataTestimonials = (programId, language) => {
  const GET_MENTORS = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
        testimonialsCollection {
          items {
            name
            text
            companyName
            photo {
              url
            }
          }
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_MENTORS, {
    variables: { id: programId, locale: language }
  });

  const programPageTestimonials =
    data?.onlineCourse?.testimonialsCollection?.items;

  return {
    programPageTestimonials,
    programPageTestimonialsLoading: loading
  };
};

export { useProgramPageDataTestimonials };
