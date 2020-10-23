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
  number: yup.string().required()
});

export { InvoiceValues, InvoiceValidationSchema };
