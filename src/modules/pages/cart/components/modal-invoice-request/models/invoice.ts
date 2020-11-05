import * as yup from 'yup';

/*
 * Invoice form values
 */

type InvoiceValues = {
  name: string;
  email: string;
  number: string;
  country: string;
};

const InvoiceValidationSchema = yup.object().shape<InvoiceValues>({
  name: yup.string().required(),
  country: yup.string(),
  email: yup
    .string()
    .email('Pleas type correct email adress')
    .required(),
  number: yup
    .string()
    .required()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    )
});

export { InvoiceValues, InvoiceValidationSchema };
