import { useTranslation } from 'react-i18next';
const WinningConceptsData = () => {
  const { t } = useTranslation();
  const data = [
    {
      label: 'Length',
      value: '8 weeks'
    },
    {
      label: 'Start',
      value: 'February 2022'
    },
    {
      label: 'Cost',
      value: '$399'
    }
  ];

  return { data };
};

export { WinningConceptsData };
