import { gql, useQuery } from '@apollo/client';

const useCoursePartnershipHeroData = () => {
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "1wAOJNAmE6XLta8WZXaxrM") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    coursePartnershipHeroData: data?.asset?.url
  };
};

export { useCoursePartnershipHeroData };
