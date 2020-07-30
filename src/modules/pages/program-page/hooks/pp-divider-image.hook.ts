import { useQuery, gql } from '@apollo/client';
/**
 * Query divider image
 */
const useProgramPageDataDivider = (programId: string) => {
  const GET_DIVIDER_IMAGE = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        imageDivider {
          url
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_DIVIDER_IMAGE, {
    variables: { id: programId }
  });
  return { programPageDividerImage: data?.onlineCourse?.imageDivider?.url };
};

export { useProgramPageDataDivider };
