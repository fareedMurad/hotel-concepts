import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const useUnlimitedAccessBooksData = () => {
  const GET_IMAGE = gql`
    query {
      asset(id: "4OHwbsXoxvWvFyQnYPHYzm") {
        url
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_IMAGE);
  const { t } = useTranslation();

  const dataList = [
    { id: 0, caption: t('home.unlimited-access.card-one.title') },
    { id: 1, caption: t('home.unlimited-access.card-four.title') },
    { id: 2, caption: t('home.unlimited-access.cartd-three.title') },
    { id: 3, caption: t('home.unlimited-access.card-two.title') }
  ];
  
  return { dataList, imageUrl: data?.asset?.url };
};

export { useUnlimitedAccessBooksData };
