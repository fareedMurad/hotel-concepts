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
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "40XS345qKFZ39LULGh1Qoi") {
        url
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  return { cardsText, benefitsImage: data?.asset?.url };
};

export { useBenefitsCards };
