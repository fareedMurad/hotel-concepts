import { gql, useQuery } from '@apollo/client';
/**
 * Query mentors for current program
 */
const useProgramPageDataMentors = (programId, language) => {
  const GET_MENTORS = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
        mentorsCollection {
          items {
            name
            surname
            from
            position
            slug
            workAt
            sys {
              id
            }
            mentorPicture {
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

  const mentorsForCurrentCourse = data?.onlineCourse?.mentorsCollection?.items;

  return {
    mentorsForCurrentCourse,
    mentorsForCurrentCourseLoading: loading
  };
};

export { useProgramPageDataMentors };
