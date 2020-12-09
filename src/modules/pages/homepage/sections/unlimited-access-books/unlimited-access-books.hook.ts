import { gql, useQuery } from '@apollo/client';
import { State } from '@app/redux/state';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const useUnlimitedAccessBooksData = () => {
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);

  const oldSafari = browserName === 'Safari' && browserVersion <= '14';
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

  const imageUrl = oldSafari ? data?.asset?.url : `${data?.asset?.url}?fm=webp`;

  return { dataList, imageUrl: imageUrl };
};

export { useUnlimitedAccessBooksData };
