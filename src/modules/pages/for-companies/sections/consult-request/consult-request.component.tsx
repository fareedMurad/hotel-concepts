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

const interestsSelect = [
  { label: 'Focused Programs', value: 'Focused Programs' },
  {
    label: 'Digital Transformation Programs',
    value: 'Digital Transformation Programs'
  },
  {
    label: 'Essential Soft Skills Programs',
    value: 'Essential Soft Skills Programs'
  },
  { label: 'Leadership Programs', value: 'Leadership Programs' },
  { label: 'Managing Covid-10 Programs', value: 'Managing Covid-10 Programs' },
  { label: 'Other', value: 'Other' }
];

const teamsizeSelect = [
  { label: 'Less than 10 employees', value: 'Less than 10 employees' },
  { label: '11-25 employees', value: '11-25 employees' },
  { label: '22-50 employees', value: '22-50 employees' },
  { label: '50-100 employees', value: '50-100 employees' },
  { label: '100+ employees', value: '100+ employees' }
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
          <H2>Sign up for a consultation</H2>
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
                      label='Full Name*'
                    />
                    <Field.Text
                      name='email'
                      className={styles.input}
                      label='Email*'
                    />
                    <Field.Text
                      name='website'
                      className={styles.input}
                      label='Company Name*'
                    />
                  </div>
                  <div className={styles.select}>
                    <Field.Select
                      name='teamSize'
                      options={teamsizeSelect}
                      defaultLabel='How many employees need training?'
                      className={classNames(styles.input)}
                    />
                  </div>
                  <div className={styles.select}>
                    <Field.Select
                      name='interests'
                      options={interestsSelect}
                      defaultLabel='What paths are you interested in?'
                      className={classNames(styles.input)}
                    />
                  </div>
                  <Button
                    children='Submit'
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
