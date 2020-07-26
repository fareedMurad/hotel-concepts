import { gql, useQuery } from '@apollo/client';

const useIntroData = () => {
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "5DtQwaZt0O7rbBkxj0feoR") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    introData: data?.asset?.url
  };
};

export { useIntroData };
