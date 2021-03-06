import * as yup from 'yup';

/**
 * Language model
 */
type LanguageModel = {
  language: string;
};

/**
 * Language validation schema
 */
const languageValidationSchema: yup.SchemaOf<LanguageModel> = yup
  .object()
  .shape({
    language: yup
      .string()
      .label('Language')
      .required('Language is required')
  });

export { LanguageModel, languageValidationSchema };
