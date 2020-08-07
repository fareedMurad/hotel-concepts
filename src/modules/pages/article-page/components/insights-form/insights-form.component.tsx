import * as React from 'react';
import { InsightsFormProps } from './insights-form.props';
import * as styles from './insights-form.scss';
import { Formik } from 'formik';
import { Form, Field, Button } from '@core/components';
import axios from 'axios';

/**
 * Renders InsightsForm
 */
const InsightsForm: React.FC<InsightsFormProps> = ({}) => {
  const [sent, setSent] = React.useState(false);
  const subscribe = async email => {
    await axios(
      'https://i2vv6fs61f.execute-api.eu-central-1.amazonaws.com/latest/send-email',
      {
        method: 'post',
        data: {
          email_address: email,
          status: 'pending'
        }
      }
    )
      .then(res => res)
      .catch(err => err.data);
    return setSent(true);
  };
  return (
    <aside className={styles.aside}>
      <div>
        <div>Fresh insight in your box</div>
        {sent ? (
          <div className={styles.notificationMessage}>
            Your subscription request had been sent, please check email to
            verify your account
          </div>
        ) : (
          <Formik
            initialValues={{ email: '' }}
            onSubmit={email => subscribe(email)}
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
        )}
      </div>
    </aside>
  );
};

export { InsightsForm };
