import * as React from 'react';
import { NewsletterProps } from './newsletter.props';
import * as styles from './newsletter.scss';
import { Formik } from 'formik';
import { Field, Button } from '@core/components';
import { Form } from 'formik';

const defaultValues = {
  newsletteAgreement: ''
};
/**
 * Renders Newsletter
 */
const Newsletter: React.FC<NewsletterProps> = ({}) => {
  return (
    <React.Fragment>
      <div className={styles.title}>Newsletter</div>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form className={styles.form}>
            <Field.Checkbox
              name='newsletteAgreement'
              label='I agree to service Newsletter and Special Offers.'
            />
            <Button
              className={styles.formSubmit}
              onClick={() => handleSubmit()}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export { Newsletter };
