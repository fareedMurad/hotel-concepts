import { gql, useQuery } from '@apollo/client';

const useArticlesAmount = () => {
  const GET_AMOUNT = gql`
    {
      articleCollection {
        total
      }
    }
  `;
  const { data, loading: amountLoading } = useQuery(GET_AMOUNT);
  return { allArticlesAmount: data?.articleCollection?.total, amountLoading };
};

export { useArticlesAmount };
