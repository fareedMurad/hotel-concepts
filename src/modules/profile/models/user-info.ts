import * as yup from 'yup';

type UserInfoModel = {
  name: string;
  surname: string;
};

const userInfoValidationSchema = yup.object<UserInfoModel>().shape({
  name: yup
    .string()
    .label('Name')
    .required(),
  surname: yup
    .string()
    .label('Surname')
    .required()
});

export { UserInfoModel, userInfoValidationSchema };
