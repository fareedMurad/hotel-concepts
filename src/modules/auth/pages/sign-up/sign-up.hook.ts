import { RegisterValues } from '@auth/models';

const useSignUpData = () => {
  /**
   * Radio title data
   */
  const titleData = [
    { value: 'ms', label: 'Ms.' },
    { value: 'mr', label: 'Mr.' }
  ];

  /**
   * Radio position data
   */
  const positionData = [
    { value: 'hospitalityProfessional', label: 'Hospitality professional' },
    { value: 'hospitalityStudent', label: 'Hospitality student' },
    {
      value: 'hospitalitySwitch',
      label: 'Want to switch to hospitality'
    },
    { value: 'other', label: 'Other' }
  ];

  /**
   * Default Values
   */
  const defaultValues: RegisterValues = {
    title: titleData[0].label || '',
    position: positionData[0].label || '',
    name: '',
    surname: '',
    email: '',
    password: '',
    newsSub: false
  };

  return { defaultValues, titleData, positionData };
};

export { useSignUpData };
