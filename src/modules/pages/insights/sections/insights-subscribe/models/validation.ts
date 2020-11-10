import * as yup from 'yup';

const InsightsSubscribeValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .label('Email')
    .required(),
  subscribeType: yup
    .string()
    .required()
    .label('Subscripe type')
});

export { InsightsSubscribeValidationSchema };
