import * as yup from 'yup';

/**
 * Uikit form values
 */
type jobDetailsValues = {
  email: string;
  password: string;
  accept: boolean;
};

/**
 * Uikit form validation schema
 */
const jobDetailsValidationSchema = yup.object<jobDetailsValues>().shape({
  name: yup
    .string()
    .label('Full Name*')
    .required('field required'),
  phone: yup
    .string()
    .label('Phone*')
    .min(6)
    .required('field required'),
  email: yup
    .string()
    .label('Email*')
    .email('Invalid email')
    .required('field required'),
  location: yup
    .string()
    .label('loacation*')
    .required('field required')
});

export { jobDetailsValues, jobDetailsValidationSchema };
