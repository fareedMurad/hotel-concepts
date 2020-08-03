import * as React from 'react';
import { JobApplyProps } from './job-apply.props';
import * as styles from './job-apply.scss';
import { Form, Field, Button, Icon, Select } from '@core/components';
import { Formik } from 'formik';
import { jobDetailsValidationSchema } from '@pages/job-details/models';
import { useJobDetailsData } from '@pages/job-details/job-details.hook';
import classNames from 'classnames';
import { ConsoleView } from 'react-device-detect';

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  linkedIn: ''
};

/**
 * Renders JobForm
 */
const JobApply: React.FC<JobApplyProps> = ({ job }) => {
  const inputLetter = React.useRef<HTMLInputElement>();
  const inputCv = React.useRef<HTMLInputElement>();
  const { locations } = useJobDetailsData();
  const [letter, setLetter] = React.useState(null);
  const [cv, setCv] = React.useState(null);
  const [formData, setFormData] = React.useState<any>({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    files: []
  });

  const sendEmail = formData => {
    fetch(
      'https://i2vv6fs61f.execute-api.eu-central-1.amazonaws.com/latest/apply-job-email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          origin: 'http://localhost:8289'
        },
        body: JSON.stringify({
          subject: `Apply for a job request`,
          html: `<p>Name: ${formData.name}</p>
          <p>Email: ${formData.email}</p>
          <p>phone: ${formData.phone}</p>
          <p>location(from):${formData.location}</p>
          <p>linkedIn: ${formData.linkedIn}</p>`
        })
      }
    )
      .then(response => response)
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

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
        {({ handleSubmit }) => (
          <Form handleSubmit={handleSubmit}>
            <div className={styles.formSection}>
              <div className={styles.marginTop}>
                <Field.Text
                  value={formData.name}
                  name='name'
                  placeholder='John'
                  className={styles.input}
                  label='Full Name*'
                  onChange={e => {
                    setFormData({ ...formData, name: e });
                  }}
                />
                <Field.Text
                  value={formData.phone}
                  name='phone'
                  placeholder='+ (000) 111 222 3334'
                  className={styles.input}
                  label='Phone*'
                  onChange={e => {
                    setFormData({ ...formData, phone: e });
                  }}
                />
                <label htmlFor='upload-cv' className={styles.labelUploadResume}>
                  Resume/CV*
                </label>
                <div
                  className={classNames(styles.hint, {
                    [styles.withFile]: cv
                  })}
                  onClick={() => inputCv?.current?.click()}
                >
                  {cv && <div className={styles.cvFile}>{cv.name}</div>}
                  <Icon className={styles.uploadIcon} name='upload-icon' />
                </div>
                <input
                  ref={inputCv}
                  id='upload-cv'
                  name='file'
                  className={styles.upload}
                  type='file'
                  accept='application/*'
                  onChange={e => {
                    const {
                      target: { files }
                    } = e;
                    if (!files) return;
                    setCv(files[0]);
                    setFormData({ ...formData, files: [files[0]] });
                  }}
                />
              </div>
              <div>
                <Field.Text
                  value={formData.email}
                  name='email'
                  placeholder='example@gmail.com'
                  type='email'
                  className={styles.input}
                  label='Email*'
                  onChange={e => {
                    setFormData({ ...formData, email: e });
                  }}
                />
                <div className={styles.select}>
                  <Select
                    value={formData.location}
                    options={locations}
                    placeholder='click here to select'
                    className={styles.input}
                    label='Location*'
                    onChange={e => setFormData({ ...formData, location: e })}
                  />
                </div>

                <label htmlFor='upload-letter' className={styles.labelUpload}>
                  Cover Letter*
                </label>
                <div
                  className={classNames(styles.hint, {
                    [styles.withFile]: letter
                  })}
                  onClick={() => inputLetter?.current?.click()}
                >
                  {letter && (
                    <div className={styles.letterFile}>{letter.name}</div>
                  )}
                  <Icon className={styles.uploadIcon} name='upload-icon' />
                </div>
                <input
                  name='file'
                  className={styles.upload}
                  ref={inputLetter}
                  type='file'
                  id='upload-letter'
                  accept='application/*'
                  onChange={e => {
                    const {
                      target: { files }
                    } = e;
                    if (!files) return;
                    setLetter(files[0]);
                    setFormData({
                      ...formData,
                      files: [...formData.files, files[0]]
                    });
                  }}
                />
              </div>
            </div>

            <Field.Text
              value={formData.linkedIn}
              name='linkedIn'
              placeholder='LinkedIn'
              type='text'
              className={styles.inputBottom}
              label='LinkedIn'
              onChange={e => {
                setFormData({ ...formData, linkedIn: e });
              }}
            />
            <Button
              onClick={() => {
                handleSubmit();
                sendEmail(formData);
              }}
              className={styles.buttonSubmit}
              type='submit'
              children='Send'
              arrow='&#8594;'
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { JobApply };
