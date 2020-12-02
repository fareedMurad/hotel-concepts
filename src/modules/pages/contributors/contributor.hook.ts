import { useQuery, gql } from '@apollo/client';

const useContributorsData = language => {
  /**
   * Get contributors
   */
  const GET_MENTORS = gql`
    query($locale: String!) {
      mentorCollection(locale: $locale) {
        items {
          name
          surname
          slug
          position
          workAt
          from
          experience
          mentorModalPicture {
            url(
              transform: {
                format: JPG_PROGRESSIVE
                width: 1600
                height: 800
                resizeStrategy: FIT
              }
            )
          }
          mentorPicture {
            url(
              transform: {
                format: JPG_PROGRESSIVE
                width: 1600
                height: 800
                resizeStrategy: FIT
              }
            )
          }
          sys {
            id
          }
        }
      }
    }
  `;

  const GET_IMAGE_ID = gql`
    {
      heroImagesCollection(where: { page: "Mentors" }) {
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
          mobileCoverImage {
            sys {
              id
            }
          }
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_MENTORS, {
    variables: { locale: language }
  });

  const { data: image } = useQuery(GET_IMAGE_ID);

  return {
    contributors: data?.mentorCollection?.items,
    loading,
    contributorsHeroImage: data?.asset?.url,
    fullImageId: image?.heroImagesCollection?.items[0].fullImage.sys.id,
    reducedImageId: image?.heroImagesCollection?.items[0].reducedImage.sys.id,
    mobileImageId: image?.heroImagesCollection?.items[0].mobileCoverImage.sys.id
  };
};

export { useContributorsData };
