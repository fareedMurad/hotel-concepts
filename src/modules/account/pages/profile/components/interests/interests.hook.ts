import { defaultInterests } from '@core/shared';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useInterestsData = () => {
  const [selectedInterests, selectInterest] = useState([] as string[]);
  const [toggleMoreInterests, setToggleMoreInterests] = useState(false);
  const dispatch = useDispatch();

  // const [interests, setInterests] = useState(defaultInterests);

  return {
    interests: defaultInterests,
    selectedInterests,
    selectInterest,
    toggleMoreInterests,
    setToggleMoreInterests,
    dispatch
    // setInterests
  };
};

export { useInterestsData };
