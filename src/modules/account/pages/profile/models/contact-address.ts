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
  title: yup.string().label('Title'),
  name: yup
    .string()
    .label('First Name')
    .trim(),
  surname: yup
    .string()
    .label('Last Name')
    .trim(),
  position: yup.string().label('I Am'),
  company: yup
    .string()
    .label('Company')
    .trim(),
  job: yup
    .string()
    .label('Job Title')
    .trim(),
  city: yup
    .string()
    .label('City')
    .trim(),
  country: yup
    .string()
    .label('Country')
    .trim(),
  phone: yup
    .string()
    .label('Phone')
    .matches(phoneRegExp, 'Phone number is not valid')
    .trim()
});

export { ContactAddressModel, contactAddressValidationSchema };
