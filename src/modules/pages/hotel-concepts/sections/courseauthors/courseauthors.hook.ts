import { useTranslation } from 'react-i18next';
const CourseAuthrosData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      imgSrc: `img/author1.png`
    },
    {
      id: 2,
      imgSrc: `img/author2.png`
    },
    {
      id: 3,
      imgSrc: `img/author3.png`
    },
    {
      id: 4,
      imgSrc: `img/author4.png`
    },
    {
      id: 5,
      imgSrc: `img/author5.png`
    },
    {
      id: 6,
      imgSrc: `img/author6.png`
    },
    {
      id: 7,
      imgSrc: `img/author7.png`
    },
    {
      id: 8,
      imgSrc: `img/author8.png`
    },
    {
      id: 9,
      imgSrc: `img/author9.png`
    }
  ];
  const instructor = [
    {
      id: 1,
      imgSrc: `img/instructor1.png`,
      name: t('hotel-concepts.instructor-details.instructor.info1.name'),
      job: t('hotel-concepts.instructor-details.instructor.info1.job-title'),
      experience: t(
        'hotel-concepts.instructor-details.instructor.info1.experience'
      ),
      btnText: t('hotel-concepts.instructor-details.instructor.info1.btn-text')
    },
    {
      id: 2,
      imgSrc: `img/instructor2.png`,
      name: t('hotel-concepts.instructor-details.instructor.info2.name'),
      job: t('hotel-concepts.instructor-details.instructor.info2.job-title'),
      experience: t(
        'hotel-concepts.instructor-details.instructor.info2.experience'
      ),
      btnText: t('hotel-concepts.instructor-details.instructor.info2.btn-text')
    }
  ];

  return { data, instructor };
};

export { CourseAuthrosData };
