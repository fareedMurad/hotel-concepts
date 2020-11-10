import * as React from 'react';
import * as styles from './consult-request.scss';
import {
  Button,
  Paragraph,
  H2,
  Field,
  Icon,
  Select,
  Preloader
} from '@core/components';
import { Formik, Form } from 'formik';
import { ConsultRequestFormValues } from '@app/models';
import { ConsultRequestProps } from './consult-request.props';
import { ConsultRequestValidationSchema } from './models';
import { FormResultModal } from '@pages/components/form-result-modal';
import { Preloaders } from '@ui/models';
import { SuccessAlertModal } from '@pages/components/success-alert-modal';
import classNames from 'classnames';
import { sendForm } from '@app/redux/form';
import { useDispatch } from 'react-redux';
/**
 * Form default values
 */

const defaultValues: ConsultRequestFormValues = {
  name: '',
  email: '',
  website: '',
  teamSize: '',
  interests: ''
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
  const dispatch = useDispatch();
  return (
    <div id='consult-request' className={styles.container}>
      <div className={styles.consultRequest}>
        <Preloader id={Preloaders.sendForm} className={styles.preloader}>
          <Paragraph className={styles.orange}>
            Not sure where to begin?
          </Paragraph>
          <H2>Request consult</H2>
          <Formik
            initialValues={defaultValues}
            onSubmit={values => {
              dispatch(sendForm.consultRequest(values));
            }}
            validationSchema={ConsultRequestValidationSchema}
          >
            {({ handleSubmit }) => (
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
                    <Field.Select
                      name='teamSize'
                      value=''
                      options={quantity}
                      placeholder='How many employees need training?'
                      className={classNames(styles.input)}
                      whiteBackground
                    />
                  </div>
                  <div className={styles.select}>
                    <Field.Select
                      name='interests'
                      value=''
                      options={quantity}
                      placeholder='What paths are you interested in?'
                      className={classNames(styles.input)}
                      label=''
                      whiteBackground
                    />
                  </div>
                  <Button
                    children='Contact me'
                    arrow
                    width={230}
                    onClick={() => handleSubmit()}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </Preloader>
      </div>
      <FormResultModal />
    </div>
  );
};

export { ConsultRequest };
