import { State } from '@app/redux/state';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const useMyInterestsData = () => {
  const { user } = useSelector((state: State) => state.auth);
  const [selectedInterests, setSelectedInterests] = useState(
    user?.interests || ([] as { label: string; value: string }[])
  );

  /**
   * List of available interests
   */
  const interestsList = [
    { label: 'Social Media', value: 'socialmedia' },
    { label: 'Trends', value: 'trends' },
    { label: 'CRM', value: 'crm' },
    { label: 'Management', value: 'management' },
    { label: 'Luxury Marketing', value: 'luxurymarketing' },
    { label: 'Guest Loyalty', value: 'guestloyalty' },
    { label: 'Reputation Management', value: 'reputationmanagement' }
  ];

  return {
    interestsList,
    selectedInterests,
    setSelectedInterests
  };
};

export { useMyInterestsData };
