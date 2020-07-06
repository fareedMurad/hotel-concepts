import * as React from 'react';
import { JobFormProps } from './job-form.props';
import * as styles from './job-form.scss';
import { Form, Field, Button, Icon } from '@core/components';
import { Formik } from 'formik';

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  location: '',
  resume: '',
  linkedIn: '',
  coverLetter: ''
};
/**
 * Renders JobForm
 */
const JobForm: React.FC<JobFormProps> = ({}) => {
  const input = React.useRef<HTMLInputElement>();
  return (
    <div className={styles.jobForm}>
      <div className={styles.title}>Fields marked * are required.</div>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => {
          console.log(values);
        }}
        // validationSchema={SignInValidationSchema}
      >
        {({ handleSubmit }) => (
          <Form handleSubmit={handleSubmit}>
            <div className={styles.formSection}>
              <div>
                <Field.Text
                  name='name'
                  placeholder='Name'
                  className={styles.input}
                  label='Full Name*'
                />
                <Field.Text
                  name='phone'
                  placeholder='Phone'
                  className={styles.input}
                  label='Phone*'
                />
                <label htmlFor='upload-cv' className={styles.labelUpload}>
                  Resume/CV*
                </label>
                <div
                  className={styles.hint}
                  onClick={() => input?.current?.click()}
                >
                  <Icon className={styles.uploadIcon} name='upload-icon' />
                </div>
                <input
                  ref={input}
                  id='upload-cv'
                  name='file'
                  className={styles.upload}
                  type='file'
                />
              </div>
              <div>
                <Field.Text
                  name='email'
                  placeholder='E-mail'
                  type='email'
                  className={styles.input}
                  label='Email*'
                />
                <Field.Text
                  name='location'
                  placeholder='location'
                  type='text'
                  className={styles.input}
                  label='location*'
                />
                <label htmlFor='upload-letter' className={styles.labelUpload}>
                  Cover Letter*
                </label>
                <div
                  className={styles.hint}
                  onClick={() => input?.current?.click()}
                >
                  <Icon className={styles.uploadIcon} name='upload-icon' />
                </div>
                <input
                  name='file'
                  className={styles.upload}
                  ref={input}
                  type='file'
                  id='upload-letter'
                />
              </div>
            </div>

            <Field.Text
              name='linkedIn'
              placeholder='linkedIn'
              type='text'
              className={styles.inputBottom}
              label='linkedIn'
            />
            <Button
              onClick={() => handleSubmit()}
              className={styles.buttonSubmit}
              type='submit'
            >
              <div>Send</div>
              <div>&#8594;</div>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { JobForm };
