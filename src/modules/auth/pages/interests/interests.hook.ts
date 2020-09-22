import { useState } from 'react';

const useInterestsData = () => {
  const [selectedInterests, selectInterest] = useState([] as string[]);

  const interests = [
    {
      value: 'socialMedia1',
      title: 'Social Media'
    },
    {
      value: 'trends1',
      title: 'Trends'
    },
    {
      value: 'socialMedia2',
      title: 'Social Media'
    },
    {
      value: 'crm1',
      title: 'CRM'
    },
    {
      value: 'management1',
      title: 'Management'
    },
    {
      value: 'luxuryMarketing1',
      title: 'Luxury Marketing'
    },
    {
      value: 'socialMedia3',
      title: 'Social Media'
    },
    {
      value: 'trends2',
      title: 'Trends'
    },
    {
      value: 'socialMedia4',
      title: 'Social Media'
    },
    {
      value: 'crm2',
      title: 'CRM'
    },
    {
      value: 'management2',
      title: 'Management'
    },
    {
      value: 'luxuryMarketing2',
      title: 'Luxury Marketing'
    },
    {
      value: 'luxuryMarketing3',
      title: 'Luxury Marketing'
    },
    {
      value: 'socialMedia5',
      title: 'Social Media'
    },
    {
      value: 'trends3',
      title: 'Trends'
    },
    {
      value: 'socialMedia6',
      title: 'Social Media'
    },
    {
      value: 'crm3',
      title: 'CRM'
    },
    {
      value: 'management3',
      title: 'Management'
    },
    {
      value: 'luxuryMarketing4',
      title: 'Luxury Marketing'
    },
    {
      value: 'luxuryMarketing5',
      title: 'Luxury Marketing'
    },
    {
      value: 'socialMedia7',
      title: 'Social Media'
    },
    {
      value: 'trends4',
      title: 'Trends'
    },
    {
      value: 'socialMedia8',
      title: 'Social Media'
    },
    {
      value: 'crm4',
      title: 'CRM'
    },
    {
      value: 'management4',
      title: 'Management'
    },
    {
      value: 'luxuryMarketing6',
      title: 'Luxury Marketing'
    }
  ];

  return { interests, selectedInterests, selectInterest };
};

export { useInterestsData };
