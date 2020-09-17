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
  title: yup.string().label('Title'),
  position: yup
    .string()
    .label('I AM')
    .required('select position'),
  name: yup
    .string()
    .label('First Name')
    .required('Type first name'),
  surname: yup
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
    .required('Password is a required field'),
  newsSub: yup.boolean()
});

export { RegisterValues, registerValidationSchema };
