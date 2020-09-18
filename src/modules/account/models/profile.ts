import * as yup from 'yup';

/**
 * Language
 */

// type LanguageValue = {
//   language: string;
// };

/**
 * Profile Form Values
 */
type ProfileValues = {
  /**
   * Contact address section
   */
  email: string;
  title: string;
  name: string;
  surname: string;
  company: string;
  job: string;
  country: string;
  city: string;
  phone: string;
  position: string;
};

/**
 * Profile validation schema
 */
const profileValidationSchema = yup.object().shape<ProfileValues>({
  email: yup
    .string()
    .label('Email')
    .email(),
  //   .required('Email is a required field'),
  // password: yup.string().label('Password'),
  // repeatPassword: yup.string().label('Password confirmation'),
  title: yup
    .string()
    .label('Title')
    .nullable()
    .required('Title is a required field'),
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
    .label('Job title')
    .required('Job title is a required field'),
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
    .label('Phonenumber')
    .required('Phonenumber is a required field'),
  position: yup.string().label('I Am')
});

export { ProfileValues, profileValidationSchema };
