import * as yup from 'yup';
import { JobDetailsFormValues } from './../../../app/models/form';

/**
 * Uikit form validation schema
 */
const jobDetailsValidationSchema = yup.object<JobDetailsFormValues>().shape({
  name: yup
    .string()
    .required()
    .label('Full Name*'),
  linkedInUrl: yup
    .string()
    .label('LinkedIn profile*')
    .required()
    .test('match', 'LinkedIn link is not correct', value => {
      if (value) {
        return value.includes('linkedin.com/in/') ? true : false;
      }
    }),
  phone: yup
    .string()
    .label('Phone*')
    .required()
    .test('num', 'Phone number must contain only numbers', value => {
      if (value) {
        const isnum = /^\d+$/.test(value);
        return isnum ? true : false;
      }
    })
    .min(11),
  email: yup
    .string()
    .label('Email*')
    .email()
    .required(),
  location: yup
    .string()
    .label('Location*')
    .required(),
  cv: yup.string(),
  cover: yup.string()
});

export { jobDetailsValidationSchema };
