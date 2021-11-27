import { useTranslation } from 'react-i18next';
const CourseSpecialData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: t('hotel-concepts.course-special.card1.title'),
      para: t('hotel-concepts.course-special.card1.para'),
      imgSrc: `img/actionable.png`
    },
    {
      id: 2,
      title: t('hotel-concepts.course-special.card2.title'),
      para: t('hotel-concepts.course-special.card2.para'),
      imgSrc: `img/design-prof.png`
    },
    {
      id: 3,
      title: t('hotel-concepts.course-special.card3.title'),
      para: t('hotel-concepts.course-special.card3.para'),
      imgSrc: `img/condensed.png`
    },
    {
      id: 4,
      title: t('hotel-concepts.course-special.card4.title'),
      para: t('hotel-concepts.course-special.card4.para'),
      imgSrc: `img/aworkbok.png`
    }
  ];

  return { data };
};

export { CourseSpecialData };
