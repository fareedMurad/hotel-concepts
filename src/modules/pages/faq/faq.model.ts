import { FAQFormValues } from '@app/models/form';
import * as yup from 'yup';

const FAQFormValidationSchema = yup.object().shape<FAQFormValues>({
  email: yup
    .string()
    .email()
    .label('Email')
    .required('Email is a required field'),
  name: yup.string().required('Name is a required field'),
  message: yup.string()
});

export { FAQFormValidationSchema };
