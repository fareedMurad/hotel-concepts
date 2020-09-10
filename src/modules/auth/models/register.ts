import * as yup from 'yup';

/**
 * Register Form Values
 */
type RegisterValues = {
  name: string;
  surname: string;
  company: string;
  job: string;
  country: string;
  city: string;
  phone: string;
  email: string;
  password: string;
};

/**
 * Register Validation Schema
 */
const registerValidationSchema = yup.object().shape<RegisterValues>({
  name: yup
    .string()
    .label('Name')
    .required('Name is a required field'),
  surname: yup
    .string()
    .label('Surname')
    .required('Surname is a required field'),
  company: yup
    .string()
    .label('Company')
    .required('Company is a required field'),
  job: yup
    .string()
    .label('Job')
    .required('Job is a required field'),
  country: yup
    .string()
    .label('Country')
    .required('Country is a required field'),
  city: yup
    .string()
    .label('City')
    .required('City is a required field'),
  phone: yup
    .string()
    .label('Phone')
    .required('Phone is a required field'),
  email: yup
    .string()
    .email('Email is not valid')
    .label('Email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(6)
    .label('Password')
    .required('Password is a required field')
});

export { RegisterValues, registerValidationSchema };
