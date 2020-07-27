import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router';

const useProgramPageData = () => {
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const programId = searchParams.get('programId');
  /**
   * query mentors for current program
   */
  const GET_MENTORS = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        mentorsCollection {
          items {
            name
            surname
            city
            position
            slug
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
    variables: { id: programId }
  });

  const mentorsForCurrentCourse = data?.onlineCourse?.mentorsCollection?.items;

  return {
    mentorsForCurrentCourse,
    mentorsForCurrentCourseLoading: loading,
    programId,
    history
  };
};

export { useProgramPageData };
