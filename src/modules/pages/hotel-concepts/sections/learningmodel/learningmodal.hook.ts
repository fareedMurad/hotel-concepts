import { useTranslation } from 'react-i18next';
const LearningModalData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: t('hotel-concepts.learning-modal.modal1.title'),
      content: t('hotel-concepts.learning-modal.modal1.content')
    },
    {
      id: 2,
      title: t('hotel-concepts.learning-modal.modal2.title'),
      content: t('hotel-concepts.learning-modal.modal2.content')
    },
    {
      id: 3,
      title: t('hotel-concepts.learning-modal.modal3.title'),
      content: t('hotel-concepts.learning-modal.modal3.content')
    },

    {
      id: 4,
      title: t('hotel-concepts.learning-modal.modal4.title'),
      content: t('hotel-concepts.learning-modal.modal4.content')
    },

    {
      id: 5,
      title: t('hotel-concepts.learning-modal.modal5.title'),
      content: t('hotel-concepts.learning-modal.modal5.content')
    }
  ];

  return { data };
};

export { LearningModalData };
