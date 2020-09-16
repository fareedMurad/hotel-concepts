import * as yup from 'yup';

/**
 * Login Form Values
 */
type LoginValues = {
  title: string;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  password: string;
};

/**
 * Login Validation Schema
 */
const loginValidationSchema = yup.object().shape<LoginValues>({
  title: yup
    .string()
    .label('Title')
    .required('Select title '),
  position: yup
    .string()
    .label('I AM')
    .required('select position'),
  firstName: yup
    .string()
    .label('First Name')
    .required('Type first name'),
  lastName: yup
    .string()
    .label('Last Name')
    .required('Type last name'),
  email: yup
    .string()
    .email('Email is not valid')
    .label('Email')
    .required('Email is a required field'),
  password: yup
    .string()
    .label('Password')
    .required('Password is a required field')
});

export { LoginValues, loginValidationSchema };
