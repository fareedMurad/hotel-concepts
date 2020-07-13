import * as React from 'react';
import { JobApplyProps } from './job-apply.props';
import * as styles from './job-apply.scss';
import { Form, Field, Button, Icon, Select } from '@core/components';
import { Formik } from 'formik';
import { jobDetailsValidationSchema } from '@pages/job-details/models';
import { useJobDetailsData } from '@pages/job-details/job-details.hook';

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
const JobApply: React.FC<JobApplyProps> = ({}) => {
  const input = React.useRef<HTMLInputElement>();
  const { locations } = useJobDetailsData();
  const [location, setLocation] = React.useState('');
  return (
    <div className={styles.jobForm}>
      <div className={styles.title}>Fields marked * are required.</div>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={jobDetailsValidationSchema}
      >
        {({ handleSubmit, validateForm }) => (
          <Form handleSubmit={handleSubmit}>
            <div className={styles.formSection}>
              <div>
                <Field.Text
                  name='name'
                  placeholder='John'
                  className={styles.input}
                  label='Full Name*'
                />
                <Field.Text
                  name='phone'
                  placeholder='+ (000) 111 222 3334'
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
                  placeholder='example@gmail.com'
                  type='email'
                  className={styles.input}
                  label='Email*'
                />
                <div className={styles.select}>
                  <Select
                    value={location}
                    options={locations}
                    placeholder='click here to select'
                    className={styles.input}
                    label='Location*'
                    onChange={setLocation}
                  />
                </div>
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
              placeholder='LinkedIn'
              type='text'
              className={styles.inputBottom}
              label='LinkedIn'
            />
            <Button
              onClick={() => {
                handleSubmit(), validateForm();
              }}
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

export { JobApply };
