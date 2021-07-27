import * as yup from 'yup';

/**
 * Uikit form values
 */
type UikitFormValues = {
  email: string;
  password: string;
  accept: boolean;
};

/**
 * Uikit form validation schema
 */
const uikitValidationSchema: yup.SchemaOf<UikitFormValues> = yup
  .object()
  .shape({
    email: yup
      .string()
      .label('Email')
      .email()
      .required(),
    password: yup
      .string()
      .label('Password')
      .min(6)
      .required(),
    accept: yup.boolean().required()
  });

export { UikitFormValues, uikitValidationSchema };
