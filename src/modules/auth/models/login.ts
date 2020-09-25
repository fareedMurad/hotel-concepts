import * as yup from 'yup';

/**
 * Login Form Values
 */
type LoginValues = {
  email: string;
  password: string;
  agreement: boolean;
};

/**
 * Login Validation Schema
 */
const loginValidationSchema = yup.object().shape<LoginValues>({
  email: yup
    .string()
    .email('Email is not valid')
    .label('Email')
    .trim()
    .required('Email is a required field'),
  password: yup
    .string()
    .label('Password')
    .trim()
    .required('Password is a required field'),
  agreement: yup
    .bool()
    .label('Agreement')
    .oneOf([true], 'Agreement is a required field')
});

export { LoginValues, loginValidationSchema };
