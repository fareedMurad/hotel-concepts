import * as React from 'react';
import { InsightsSubscribeProps } from './insights-subscribe.props';
import * as styles from './insights-subscribe.scss';
import { H2, Form, Field, Button, Tabs, PreCaption } from '@core/components';
import { Formik } from 'formik';

/**
 * Renders InsightsSubscribe
 */
const InsightsSubscribe: React.FC<InsightsSubscribeProps> = ({}) => {
  return (
    <div className={styles.insightsSubscribe}>
      <div className={styles.wrapper}>
        <PreCaption>Delivered to your inbox.</PreCaption>
        <div className={styles.title}>
          <H2>
            Industry insights you <br /> won't delete
          </H2>
        </div>
        <Formik
          initialValues={{ email: '', subscribeType: '0' }}
          onSubmit={values => {
            console.log(values);
            // dispatch(action(values));
          }}
          // validationSchema={} add later
        >
          {({ handleSubmit }) => (
            <Form handleSubmit={handleSubmit} className={styles.form}>
              <Field.Tabs
                name='subscribeType'
                data={[
                  {
                    id: '0',
                    caption: 'Weekly Insights',
                    description:
                      'The editor picks highlights delivered every sundays.'
                  },
                  {
                    id: '1',
                    caption: 'The Daily Alert',
                    description:
                      'Links to all the digital articles published in the last 24 hours.'
                  },
                  {
                    id: '2',
                    caption: 'Leadership',
                    description:
                      'Must-reads from our most recent articles on leadership delivered once a month.'
                  }
                ]}
              />
              <div className={styles.submitForm}>
                <Field.Text
                  name='email'
                  label='E-mail'
                  type='email'
                  className={styles.formInput}
                />
                <Button
                  onClick={() => handleSubmit()}
                  className={styles.buttonSubmit}
                  type='submit'
                  children='Subscribe'
                  arrow='&#8594;'
                  width='35%'
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { InsightsSubscribe };
