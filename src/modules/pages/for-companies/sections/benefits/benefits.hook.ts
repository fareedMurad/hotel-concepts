import { gql, useQuery } from '@apollo/client';
import { State } from '@app/redux/state';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const useBenefitsCards = () => {
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion <= '14';

  const { t } = useTranslation();
  const cardsText = [
    {
      id: 1,
      text: t('for-companies.benefits.for-organization.list.item1')
    },
    {
      id: 2,
      text: t('for-companies.benefits.for-organization.list.item2')
    },
    {
      id: 3,
      text: t('for-companies.benefits.for-organization.list.item3')
    }
  ];
  const cardsText2 = [
    {
      id: 1,
      text: `Increased confidence and polished specialist skills with an in-depth focus on key and cutting-edge financial topics`
    },
    {
      id: 2,
      text: `A dynamic global study experience that expands horizons, develops expertise and a passion to succeed`
    },
    {
      id: 3,
      text: `Capability to take-on the most complex organisational challenges`
    }
  ];
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "40XS345qKFZ39LULGh1Qoi") {
        url
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  const imageUrl = oldSafari ? data?.asset?.url : `${data?.asset?.url}?fm=webp`;

  return { cardsText, benefitsImage: imageUrl, cardsText2 };
};

export { useBenefitsCards };
