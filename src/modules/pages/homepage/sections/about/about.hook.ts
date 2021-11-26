import { useTranslation } from 'react-i18next';

const useAboutData = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: 'Hospitality leaders who want to level up',
      description:
        'Course content like no other to help you see things differently and act strategically.'
    },
    {
      title: 'Busy, full-time hospitality professionals',
      description:
        'Designed specifically for full-time  professionals, each Sprint is contained to 2-3 weeks so that you don’t have to take time off.'
    },
    {
      title: 'Proactive go-getters',
      description:
        'Sprints are for those who not only think, but also do. Get inspired and informed to make strategic decisions that result in change.'
    }
  ];

  return { data };
};

export { useAboutData };
