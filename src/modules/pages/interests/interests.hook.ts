import { defaultInterests } from '@core/shared';
import { useState } from 'react';

const useInterestsData = () => {
  const [selectedInterests, selectInterest] = useState([] as string[]);

  return { interests: defaultInterests, selectedInterests, selectInterest };
};

export { useInterestsData };
