import { gql, useQuery } from '@apollo/client';

const useIntroData = () => {
  const GET_HERO_IMAGE = gql`
    {
      heroImagesCollection(where: { page: "For companies" }) {
        items {
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

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    fullImageId: data?.heroImagesCollection?.items[0].fullImage.sys.id,
    fullImageUrl: data?.heroImagesCollection?.items[0].fullImage.url,
    reducedImageId: data?.heroImagesCollection?.items[0].reducedImage.sys.id
  };
};

export { useIntroData };
