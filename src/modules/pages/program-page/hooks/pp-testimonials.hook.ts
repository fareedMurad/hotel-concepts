import { gql, useQuery } from '@apollo/client';
/**
 * Query testimonials
 */
const useProgramPageDataTestimonials = programId => {
  const GET_MENTORS = gql`
    query($id: String!) {
      onlineCourse(id: $id, locale: "en-US") {
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
    variables: { id: programId }
  });

  const programPageTestimonials =
    data?.onlineCourse?.testimonialsCollection?.items;

  return {
    programPageTestimonials,
    programPageTestimonialsLoading: loading
  };
};

export { useProgramPageDataTestimonials };
