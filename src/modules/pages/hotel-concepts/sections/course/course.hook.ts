import { useTranslation } from 'react-i18next';
const AboutCoursesData = () => {
  const { t } = useTranslation();
  const data = [
    {
      label: 'FORMAT',
      value: 'Online Cources'
    },
    {
      label: 'Start Date',
      value: 'February 2022'
    },
    {
      label: 'Length',
      value: '8 weeks'
    },
    {
      label: 'Language',
      value: 'English'
    },
    {
      label: 'Cost',
      value: '399$'
    }
  ];

  return { data };
};

export { AboutCoursesData };
