import * as React from 'react';
import { ConsultRequestProps } from './consult-request.props';
import * as styles from './consult-request.scss';
import { Paragraph, H2, Field, Icon, Button, Select } from '@core/components';
import { Formik, Form } from 'formik';
import classNames from 'classnames';
/**
 * Form default values
 */

const defaultValues = {
  name: '',
  phone: '',
  email: ''
};

/**
 * Options for select
 */

const quantity = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' }
];

/**
 * Renders ConsultRequest
 */
const ConsultRequest: React.FC<ConsultRequestProps> = ({}) => {
  return (
    <div id='consult-request' className={styles.container}>
      <div className={styles.consultRequest}>
        <Paragraph className={styles.orange}>
          Not sure where to begin?
        </Paragraph>
        <H2>Request consult</H2>
        <Formik
          initialValues={defaultValues}
          onSubmit={values => {
            console.log(values);
          }}
          // validationSchema={jobDetailsValidationSchema}
        >
          {({ handleSubmit, validateForm }) => (
            <Form>
              <div className={styles.formSection}>
                <div className={styles.mainField}>
                  <Field.Text
                    name='name'
                    className={styles.input}
                    label='Name'
                  />
                  <Field.Text
                    name='email'
                    className={styles.input}
                    label='Email'
                  />
                  <Field.Text
                    name='website'
                    className={styles.input}
                    label='Website'
                  />
                </div>
                <div className={styles.select}>
                  <Select
                    value=''
                    options={quantity}
                    placeholder='How many employees need training?'
                    className={classNames(styles.input)}
                    whiteBackground
                  />
                </div>
                <div className={styles.select}>
                  <Select
                    value=''
                    options={quantity}
                    placeholder='What paths are you interested in?'
                    className={classNames(styles.input)}
                    label=''
                    whiteBackground
                  />
                </div>
                <Button children='Contact me' arrow='&rarr;' />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { ConsultRequest };
