import { H1, Preloader, Form, Field } from '@core/components';
import * as React from 'react';
import * as styles from './settings.scss';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import { settingsValidationSchema } from '@profile/models';
import { useSettingsData } from './settings.hook';

/**
 * Renders Settings
 */
const Settings: React.FC = () => {
  const { defaultValues } = useSettingsData();

  return (
    <Preloader id={Preloaders.settings}>
      <div className={styles.settings}>
        <H1>User Settings</H1>
        <Formik
          initialValues={defaultValues}
          validationSchema={settingsValidationSchema}
          onSubmit={values => console.log(values)}
        >
          {({ handleSubmit }) => (
            <Form className={styles.form}>
              <Field.Switch name='notifications' label='Notifications' />
            </Form>
          )}
        </Formik>
      </div>
    </Preloader>
  );
};

export { Settings };
