import { JobDetailsFormValues } from './../../../app/models/form';
import * as yup from 'yup';

/**
 * Uikit form validation schema
 */
const jobDetailsValidationSchema = yup.object<JobDetailsFormValues>().shape({
  name: yup.string().label('Full Name*'),

  linkedIn: yup.string().label('LinkedIn'),

  phone: yup.string().label('Phone*'),

  email: yup
    .string()
    .label('Email*')
    .email(),

  location: yup.string().label('Location*')
});

export { jobDetailsValidationSchema };
