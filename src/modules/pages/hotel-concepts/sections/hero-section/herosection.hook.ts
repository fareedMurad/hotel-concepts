import { useTranslation } from 'react-i18next';

const useHeroSectionData = () => {
  const { t } = useTranslation();
  const data = {
    reducedImageId: '',
    fullImageId: '.img/herosection.png',
    mobileImageId: 'img/herosection.png',
    collaborationImg: 'img/mvp.png'
  };

  return { data };
};

export { useHeroSectionData };
