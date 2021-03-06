import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const useStoryMissionData = () => {
  const { t } = useTranslation();
  const anchors = [
    {
      id: 1,
      caption: t('story-mission.anchors.overview'),
      rate: '1.0',
      anchor: 'overview'
    },
    {
      id: 2,
      caption: t('story-mission.anchors.mission'),
      rate: '2.0',
      anchor: 'mission'
    },
    {
      id: 3,
      caption: t('story-mission.anchors.work'),
      rate: '3.0',
      anchor: 'our-work'
    },
    {
      id: 4,
      caption: t('story-mission.anchors.values'),
      rate: '4.0',
      anchor: 'values'
    }
  ];
  const GET_IMAGES_ID = gql`
    {
      heroImagesCollection(where: { page: "About-us" }) {
        items {
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

  const { data, loading, error } = useQuery(GET_IMAGES_ID);

  return {
    anchors,
    fullImageId: data?.heroImagesCollection?.items[0].fullImage.sys.id,
    reducedImageId: data?.heroImagesCollection?.items[0].reducedImage.sys.id,
    mobileImageId: data?.heroImagesCollection?.items[0].mobileCoverImage.sys.id
  };
};

export { useStoryMissionData };
