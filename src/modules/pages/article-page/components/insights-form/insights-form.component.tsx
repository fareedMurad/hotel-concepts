import * as React from 'react';
import { InsightsFormProps } from './insights-form.props';
import * as styles from './insights-form.scss';
import { Formik } from 'formik';
import { Form, Field, Button } from '@core/components';

/**
 * Renders InsightsForm
 */
const InsightsForm: React.FC<InsightsFormProps> = ({}) => {
  return (
    <aside className={styles.aside}>
      <div>
        <div>Fresh insight in your box</div>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={email => console.log(email)}
        >
          {({ handleSubmit }) => (
            <Form handleSubmit={handleSubmit} className={styles.form}>
              <Field.Text type='email' label='Email' name='email' />
              <Button
                className={styles.button}
                onClick={() => handleSubmit()}
                children='Subscribe'
                arrow='&#8594;'
                width={284}
              />
            </Form>
          )}
        </Formik>
      </div>
    </aside>
  );
};

export { InsightsForm };
