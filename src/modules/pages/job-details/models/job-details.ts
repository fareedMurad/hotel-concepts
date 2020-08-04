import * as yup from 'yup';

/**
 * Uikit form values
 */
type jobDetailsValues = {
  email: string;
  // accept: boolean;
  name: string;
  phone: string;
  location: string;
  linkedIn: string;
};

/**
 * Uikit form validation schema
 */
const jobDetailsValidationSchema = yup.object<jobDetailsValues>().shape({
  name: yup.string().label('Full Name*'),

  linkedIn: yup.string().label('LinkedIn'),

  phone: yup.string().label('Phone*'),

  email: yup
    .string()
    .label('Email*')
    .email(),

  location: yup.string().label('Location*')
});

export { jobDetailsValues, jobDetailsValidationSchema };
