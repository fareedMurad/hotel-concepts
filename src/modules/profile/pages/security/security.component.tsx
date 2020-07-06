import { Field, Form, H1, Preloader } from '@core/components';
import { securityInfoValidationSchema } from '@profile/models';
import { Preloaders } from '@ui/models';
import { Formik } from 'formik';
import * as React from 'react';
import { useSecurityData } from './security.hook';
import * as styles from './security.scss';

/**
 * Renders Security details
 */
const Security: React.FC = () => {
  const { defaultValues } = useSecurityData();

  return (
    <Preloader id={Preloaders.security}>
      <div className={styles.security}>
        <H1>Security Details</H1>
        <Formik
          initialValues={defaultValues}
          validationSchema={securityInfoValidationSchema}
          onSubmit={values => console.log(values)}
        >
          {({ handleSubmit }) => (
            <Form className={styles.form}>
              <Field.Text name='email' label='Email' placeholder='Email' />
            </Form>
          )}
        </Formik>
      </div>
    </Preloader>
  );
};

export { Security };
