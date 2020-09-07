import * as yup from 'yup';

/**
 * Login Form Values
 */
type LoginValues = {
  email: string;
  password: string;
};

/**
 * Login Validation Schema
 */
const loginValidationSchema = yup.object().shape<LoginValues>({
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
