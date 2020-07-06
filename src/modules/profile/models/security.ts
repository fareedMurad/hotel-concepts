import * as yup from 'yup';

/**
 * Settings model
 */
type SecurityInfoModel = {
  email: string;
};

const securityInfoValidationSchema = yup.object<SecurityInfoModel>().shape({
  email: yup
    .boolean()
    .label('Email')
    .required()
});

export { SecurityInfoModel, securityInfoValidationSchema };
