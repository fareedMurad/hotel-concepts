import { gql, useQuery } from '@apollo/client';

const useProgramLearningApproachData = (
  programId: string,
  language: string
) => {
  const GET_LEARNING_APPROACH_DATA = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
        learningApproachCollection {
          items {
            title
            description
          }
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_LEARNING_APPROACH_DATA, {
    variables: { id: programId, locale: language }
  });
  // const learningApproachData = [
  //   {
  //     name: 'Sprints',
  //     description:
  //       'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem.'
  //   },
  //   {
  //     name: 'Tests & Quizzes',
  //     description:
  //       'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem.'
  //   },
  //   {
  //     name: 'Videos',
  //     description:
  //       'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem.'
  //   },
  //   {
  //     name: 'Case Studies',
  //     description:
  //       'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem.'
  //   },
  //   {
  //     name: 'Practical Assignments',
  //     description:
  //       'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem.'
  //   },
  //   {
  //     name: 'Q&A sessions',
  //     description:
  //       'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high impact skills that are needed in today’s hospitality ecosystem.'
  //   }
  // ];
  return {
    learningApproachData: data?.onlineCourse?.learningApproachCollection?.items,
    learningApproachLoading: loading
  };
};

export { useProgramLearningApproachData };
