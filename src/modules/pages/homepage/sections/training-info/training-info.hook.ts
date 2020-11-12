import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const useTrainingInfoData = () => {
  const { t } = useTranslation();

  const trainingData = [
    t('home.training-info.training-data.title-one'),
    t('home.training-info.training-data.title-two'),
    t('home.training-info.training-data.title-three'),
    t('home.training-info.training-data.title-four'),
    t('home.training-info.training-data.title-five'),
    t('home.training-info.training-data.title-six')
  ];

  const GET_HERO_IMAGE = gql`
    {
      asset(id: "3rniPZ6PNTr2w1me4TqAMx") {
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
