import { useTranslation } from 'react-i18next';

const useExperiencesAssignmentData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: t('learning-approach.experiancess-assignment.slides.slide1.title'),
      list: [
        {
          id: 1,
          caption: t(
            'learning-approach.experiancess-assignment.slides.slide1.list.caption1'
          )
        },
        {
          id: 2,
          caption: t(
            'learning-approach.experiancess-assignment.slides.slide1.list.caption2'
          )
        },
        {
          id: 3,
          caption: t(
            'learning-approach.experiancess-assignment.slides.slide1.list.caption3'
          )
        }
      ]
    },
    {
      id: 2,
      title: t('learning-approach.experiancess-assignment.slides.slide2.title'),
      list: [
        {
          id: 1,
          caption: t(
            t(
              'learning-approach.experiancess-assignment.slides.slide2.list.caption1'
            )
          )
        },
        {
          id: 2,
          caption: t(
            'learning-approach.experiancess-assignment.slides.slide2.list.caption2'
          )
        },
        {
          id: 3,
          caption: t(
            'learning-approach.experiancess-assignment.slides.slide2.list.caption3'
          )
        }
      ]
    },
    {
      id: 3,
      title: t('learning-approach.experiancess-assignment.slides.slide3.title'),
      list: [
        {
          id: 1,
          caption: t(
            'learning-approach.experiancess-assignment.slides.slide3.list.caption1'
          )
        },
        {
          id: 2,
          caption: t(
            'learning-approach.experiancess-assignment.slides.slide3.list.caption2'
          )
        },
        {
          id: 3,
          caption: t(
            'learning-approach.experiancess-assignment.slides.slide3.list.caption3'
          )
        }
      ]
    }
  ];

  return { data };
};

export { useExperiencesAssignmentData };
