import * as yup from 'yup';

/**
 * Register Form Values
 */
type RegisterValues = {
  email: string;
  password: string;
};

/**
 * Register Validation Schema
 */
const registerValidationSchema = yup.object().shape<RegisterValues>({
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

export { RegisterValues, registerValidationSchema };
