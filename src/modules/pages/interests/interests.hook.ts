import { useState } from 'react';

const useInterestsData = () => {
  const [selectedInterests, selectInterest] = useState([] as string[]);

  const interests = [
    {
      value: 'socialmedia',
      title: 'Social Media'
    },
    {
      value: 'trends',
      title: 'Trends'
    },
    {
      value: 'crm',
      title: 'CRM'
    },
    {
      value: 'management',
      title: 'Management'
    },
    {
      value: 'luxurymarketing',
      title: 'Luxury Marketing'
    },
    {
      value: 'guestloyalty',
      title: 'Guest Loyalty'
    },
    {
      value: 'reputationmanagement',
      title: 'Reputation Management'
    }
  ];

  return { interests, selectedInterests, selectInterest };
};

export { useInterestsData };
