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
  name: yup
    .string()
    .label('Full Name*')
    .required(),
  linkedIn: yup
    .string()
    .label('LinkedIn')
    .required(),
  phone: yup
    .string()
    .label('Phone*')
    .min(6)
    .required(),
  email: yup
    .string()
    .label('Email*')
    .email()
    .required(),
  location: yup
    .string()
    .label('Location*')
    .required()
});

export { jobDetailsValues, jobDetailsValidationSchema };
