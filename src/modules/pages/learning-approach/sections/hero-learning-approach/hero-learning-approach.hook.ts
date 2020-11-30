import { gql, useQuery } from '@apollo/client';

const useHeroLearningApproachData = () => {
  const GET_IMAGE_ID = gql`
    {
      heroImagesCollection(where: { page: "Learning approach" }) {
        items {
          page
          fullImage {
            url
            sys {
              id
            }
          }
          reducedImage {
            sys {
              id
            }
          }
        }
      }
    }
  `;

  const { data } = useQuery(GET_IMAGE_ID);

  return {
    fullImageId: data?.heroImagesCollection?.items[0].fullImage.sys.id,
    reducedImageId: data?.heroImagesCollection?.items[0].reducedImage.sys.id,
    heroLearningApproachData: data?.heroImagesCollection?.items[0].fullImage.url
  };
};

export { useHeroLearningApproachData };
