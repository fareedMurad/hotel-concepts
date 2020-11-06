import * as yup from 'yup';

/**
 * Contact us modal model
 */

type ContactUsModalModel = {
  name: string;
  email: string;
  company: string;
  website: string;
  teamSize: string;
  interests: string;
  comment: string;
};

/**
 * Default values for formik
 */

const defaultValues: ContactUsModalModel = {
  name: '',
  email: '',
  company: '',
  website: '',
  teamSize: '',
  interests: '',
  comment: ''
};

/*
 * Contact us modal validation schema
 */

const ContactUsModalValidationSchema = yup.object().shape<ContactUsModalModel>({
  name: yup
    .string()
    .required('Name is required')
    .label('Your Name'),
  email: yup
    .string()
    .required('Email is required')
    .label('Contact E-mail')
    .trim(),
  company: yup.string().label('Property / Company Name'),
  website: yup.string(),
  teamSize: yup.string(),
  interests: yup.string(),
  comment: yup.string()
});

export { defaultValues, ContactUsModalValidationSchema };
