import i18next from 'i18next';
import * as yup from 'yup';

/**
 * String map to func map
 */
const withTranslation = (source: { [x: string]: string | Function }) => {
  Object.entries(source).map(([key, value]) => {
    source[key] = ({ path, values, min, max, less, more }) =>
      i18next
        .t(<string>value)
        .replace(/\$\{path\}/gi, i18next.t(path))
        .replace(/\$\{values\}/gi, i18next.t(values))
        .replace(/\$\{min\}/gi, i18next.t(min))
        .replace(/\$\{max\}/gi, i18next.t(max))
        .replace(/\$\{less\}/gi, i18next.t(less))
        .replace(/\$\{more\}/gi, i18next.t(more));
  });

  return source;
};

/**
 * Set formik messages with func handlers
 */
yup.setLocale({
  mixed: withTranslation({
    default: '${path} is invalid',
    required: '${path} is a required field',
    oneOf: '${path} must be one of the following values: ${values}',
    notOneOf: '${path} must not be one of the following values: ${values}'
  }),
  string: withTranslation({
    length: '${path} must be exactly ${length} characters',
    min: '${path} must be at least ${min} characters',
    max: '${path} must be at most ${max} characters',
    matches: '${path} must match the following: "${regex}"',
    email: '${path} must be a valid email',
    url: '${path} must be a valid URL',
    uuid: '${path} must be a valid UUID',
    trim: '${path} must be a trimmed string',
    lowercase: '${path} must be a lowercase string',
    uppercase: '${path} must be a upper case string'
  }),
  number: withTranslation({
    min: '${path} must be greater than or equal to ${min}',
    max: '${path} must be less than or equal to ${max}',
    lessThan: '${path} must be less than ${less}',
    moreThan: '${path} must be greater than ${more}',
    notEqual: '${path} must be not equal to ${notEqual}',
    positive: '${path} must be a positive number',
    negative: '${path} must be a negative number',
    integer: '${path} must be an integer'
  }),
  date: withTranslation({
    min: '${path} field must be later than ${min}',
    max: '${path} field must be at earlier than ${max}'
  }),
  array: withTranslation({
    min: '${path} field must have at least ${min} items',
    max: '${path} field must have less than or equal to ${max} items'
  })
});
