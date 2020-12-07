import { gql, useQuery } from '@apollo/client';
import { State } from '@app/redux/state';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const useTrainingInfoData = () => {
  const { t } = useTranslation();
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion < '14';

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

  const imageUrl = oldSafari ? data?.asset?.url : `${data?.asset?.url}?fm=webp`;

  return {
    trainingInfoImage: imageUrl,
    trainingData
  };
};

export { useTrainingInfoData };
