import * as yup from 'yup';

/**
 * Settings model
 */
type SettingsModel = {
  notifications: boolean;
};

const settingsValidationSchema = yup.object<SettingsModel>().shape({
  notifications: yup
    .boolean()
    .label('Notifications')
    .required()
});

export { SettingsModel, settingsValidationSchema };
