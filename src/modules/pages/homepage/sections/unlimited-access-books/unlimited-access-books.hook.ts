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
    { id: 0, caption: t('home.unlimited-access.item-one') },
    { id: 1, caption: t('home.unlimited-access.item-two') },
    { id: 2, caption: t('home.unlimited-access.item-three') },
    { id: 3, caption: t('home.unlimited-access.item-four') }
  ];

  return { dataList, imageUrl: data?.asset?.url };
};

export { useUnlimitedAccessBooksData };
