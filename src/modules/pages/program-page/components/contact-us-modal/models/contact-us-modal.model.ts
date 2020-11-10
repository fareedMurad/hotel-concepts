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
  company: yup
    .string()
    .label('Property / Company Name')
    .required(),
  website: yup
    .string()
    .required()
    .label('Website'),
  teamSize: yup
    .string()
    .required()
    .label('Team size'),
  interests: yup
    .string()
    .required()
    .label('Interests'),
  comment: yup
    .string()
    .required()
    .label('Comment')
});

export { defaultValues, ContactUsModalValidationSchema };
