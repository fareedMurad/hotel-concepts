import { onlineCourses } from '@pages/homepage/sections/online-courses';
import { gql, useQuery } from '@apollo/client';

const useProgramAboutData = programId => {
  const GET_PROGRAM_ABOUT_DATA = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        about {
          aboutText
          skills
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PROGRAM_ABOUT_DATA, {
    variables: { id: programId }
  });

  return { about: data?.onlineCourse?.about, loading };
};

export { useProgramAboutData };
