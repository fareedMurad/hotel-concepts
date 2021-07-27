import * as yup from 'yup';
import { type } from 'os';

/*
 * Contact address form values
 */

type ContactAddressValues = {
  city: string;
  company: string;
  country: string;
  name: string;
  surname: string;
  position: string;
  phone: string;
  job: string;
  title: string;
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const contactAddressValidationSchema: yup.SchemaOf<ContactAddressValues> = yup
  .object()
  .shape({
    city: yup.string().label('City'),
    company: yup.string().label('Company'),
    country: yup.string().label('Country'),
    name: yup
      .string()
      .label('First Name')
      .required('First Name is require'),
    surname: yup
      .string()
      .label('Last Name')
      .required('Last Name is require'),
    position: yup.string().label('I Am'),
    job: yup.string().label('Job Title'),
    phone: yup
      .string()
      .label('Phone')
      .matches(phoneRegExp, 'Phone number is not valid'),
    title: yup.string().label('Title')
  });

export { ContactAddressValues, contactAddressValidationSchema };
