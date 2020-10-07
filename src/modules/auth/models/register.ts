import * as yup from 'yup';

/**
 * Register Form Values
 */
type RegisterValues = {
  title: string;
  name: string;
  surname: string;
  position: string;
  email: string;
  password: string;
  newsSub: boolean;
};

/**
 * Register Validation Schema
 */
const registerValidationSchema = yup.object().shape<RegisterValues>({
  title: yup
    .string()
    .label('Title')
    .required('Title is required'),
  name: yup
    .string()
    .label('First Name')
    .trim()
    .required('First Name is required'),
  surname: yup
    .string()
    .label('Last Name')
    .trim()
    .required('Last name is required'),
  position: yup
    .string()
    .label('I am')
    .trim()
    .required('Position is required'),
  email: yup
    .string()
    .email('Email is not valid')
    .label('Email')
    .trim()
    .required('Email is required'),
  password: yup
    .string()
    .label('Password')
    .trim()
    .required('Password is required '),
  newsSub: yup.boolean()
});

export { RegisterValues, registerValidationSchema };
