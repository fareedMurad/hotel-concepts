import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const useBenefitsCards = () => {
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
        url(transform: { format: WEBP })
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  return { cardsText, benefitsImage: data?.asset?.url, cardsText2 };
};

export { useBenefitsCards };
