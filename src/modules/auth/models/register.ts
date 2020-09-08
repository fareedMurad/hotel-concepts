import * as yup from 'yup';

/**
 * Register Form Values
 */
type RegisterValues = {
  name: string;
  surname: string;
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
