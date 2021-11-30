import { useTranslation } from 'react-i18next';
const CourseAuthrosModalData = () => {
  const { t } = useTranslation();

  const instructor = [
    {
      id: 1,
      imgSrc: `img/KelsiKennedy.png`,
      name: t('hotel-concepts.instructor-details.instructor.info2.name'),
      job: t('hotel-concepts.instructor-details.instructor.info2.job-title'),
      location: t(
        'hotel-concepts.instructor-details.instructor.info2.location'
      ),
      linkedin: `img/linkedin.svg`
    }
    // {
    //   id: 2,
    //   imgSrc: `img/instructor2.png`,
    //   name: t('hotel-concepts.instructor-details.instructor.info2.name'),
    //   job: t('hotel-concepts.instructor-details.instructor.info2.job-title'),
    //   experience: t(
    //     'hotel-concepts.instructor-details.instructor.info2.experience'
    //   ),
    //   btnText: t('hotel-concepts.instructor-details.instructor.info2.btn-text')
    // }
  ];
  const instructorDetails = [
    {
      id: 1,
      details: t(
        'hotel-concepts.instructor-details.instructor.info2.detail-experience.li1'
      )
    },
    {
      id: 2,
      details: t(
        'hotel-concepts.instructor-details.instructor.info2.detail-experience.li2'
      )
    },
    {
      id: 3,
      details: t(
        'hotel-concepts.instructor-details.instructor.info2.detail-experience.li3'
      )
    },
    {
      id: 4,
      details: t(
        'hotel-concepts.instructor-details.instructor.info2.detail-experience.li4'
      )
    },
    {
      id: 5,
      details: t(
        'hotel-concepts.instructor-details.instructor.info2.detail-experience.li5'
      )
    },
    {
      id: 6,
      details: t(
        'hotel-concepts.instructor-details.instructor.info2.detail-experience.li6'
      )
    }
  ];

  return { instructor, instructorDetails };
};

export { CourseAuthrosModalData };
