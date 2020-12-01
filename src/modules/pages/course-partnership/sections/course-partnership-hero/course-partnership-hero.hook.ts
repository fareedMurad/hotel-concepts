import { gql, useQuery } from '@apollo/client';

const useCoursePartnershipHeroData = () => {
  const GET_HERO_IMAGE = gql`
    {
      heroImagesCollection(where: { page: "Course partnership" }) {
        items {
          page
          fullImage {
            sys {
              id
            }
          }
          reducedImage {
            sys {
              id
            }
          }
          mobileCoverImage {
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
    reducedImageId: data?.heroImagesCollection?.items[0].reducedImage.sys.id,
    mobileImageId: data?.heroImagesCollection?.items[0].mobileCoverImage.sys.id
  };
};

export { useCoursePartnershipHeroData };
