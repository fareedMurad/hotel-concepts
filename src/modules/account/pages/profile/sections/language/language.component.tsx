import { Card } from '@account/components';
import { editPrefferedLanguage } from '@app/redux/account';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { LanguageModel, languageValidationSchema } from '../../models';
import { useLanguageData } from './language.hook';
import { LanguageProps } from './language.props';
import * as styles from './language.scss';

/**
 * Languages
 */
const languages = [
  { value: 'en-US', label: 'English' },
  { value: 'es', label: 'Spanish' }
];

/**
 * Renders Language
 */
const Language: React.FC<LanguageProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { user } = useLanguageData();
  const preferedLanguage = languages.find(one => one.value == user?.language);

  return (
    <Card className={classNames(styles.language, className)} title='Language'>
      <Preloader id={Preloaders.profileLanguage} size={75} thickness={4}>
        <Formik
          enableReinitialize
          validationSchema={languageValidationSchema}
          initialValues={
            {
              language: preferedLanguage ? user.language : null
            } as LanguageModel
          }
          onSubmit={values => {
            dispatch(editPrefferedLanguage(values.language as string));
          }}
        >
          {({ handleSubmit }) => (
            <div className={styles.form}>
              <div className={styles.container}>
                <div className={styles.label}>Preffered language</div>
                <Field.Select
                  className={styles.select}
                  name='language'
                  options={languages}
                />
              </div>
              <Button className={styles.submit} onClick={() => handleSubmit()}>
                Save
              </Button>
            </div>
          )}
        </Formik>
      </Preloader>
    </Card>
  );
};

export { Language };
