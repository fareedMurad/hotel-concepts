import { gql, useQuery } from '@apollo/client';

const useBenefitsCards = () => {
  const cardsText = [
    {
      id: 1,
      text:
        'Improve employee retention - show long-term commitment to your staff by investing in their personal development. Benefit from higher levels of motivation and stronger personal connections to the business. '
    },
    {
      id: 2,
      text: 'Address organisational challenges .'
    },
    {
      id: 3,
      text:
        'Increase your competitive advantage with new knowledge and practices.'
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
