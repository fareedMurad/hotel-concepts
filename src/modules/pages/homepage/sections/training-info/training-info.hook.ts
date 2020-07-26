import { gql, useQuery } from '@apollo/client';

const useTrainingInfoData = () => {
  const trainingData = [
    'Practical Assignments ',
    'Coaching sessions',
    'Mentorship',
    'Q&A sessions',
    'Video lectures',
    'Tests & Quizzes'
  ];

  const GET_HERO_IMAGE = gql`
    {
      asset(id: "1bPAJVNaN21ZmBR5gaxqKh") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    trainingInfoImage: data?.asset?.url,
    trainingData
  };
};

export { useTrainingInfoData };
