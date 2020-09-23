import * as yup from 'yup';

/**
 * Contact address model
 */
type ContactAddressModel = {
  title: string;
  name: string;
  surname: string;
  position: string;
  company: string;
  job: string;
  city: string;
  country: string;
  phone: string;
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

/**
 * Contact address validation schema
 */
const contactAddressValidationSchema = yup.object().shape<ContactAddressModel>({
  title: yup
    .string()
    .label('Title')
    .nullable(),
  name: yup
    .string()
    .label('First Name')
    .nullable(),
  surname: yup
    .string()
    .label('Last Name')
    .nullable(),
  position: yup
    .string()
    .label('I Am')
    .nullable(),
  company: yup
    .string()
    .label('Company')
    .nullable(),
  job: yup
    .string()
    .label('Job Title')
    .nullable(),
  city: yup
    .string()
    .label('City')
    .nullable(),
  country: yup
    .string()
    .label('Country')
    .nullable(),
  phone: yup
    .string()
    .label('Phone')
    .matches(phoneRegExp, 'Phone number is not valid')
    .nullable()
});

export { ContactAddressModel, contactAddressValidationSchema };
