import * as React from 'react';
import { JobApplyProps } from './job-apply.props';
import * as styles from './job-apply.scss';
import { Form, Field, Button, Icon, Select } from '@core/components';
import { Formik } from 'formik';
import { jobDetailsValidationSchema } from '@pages/job-details/models';
import { useJobDetailsData } from '@pages/job-details/job-details.hook';
import classNames from 'classnames';
import { ConsoleView } from 'react-device-detect';
import axios from 'axios';

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
  const [restFormValues, setFormData] = React.useState<any>({
    location: '',
    files: []
  });

  // const sendEmail = formData => {
  //   const fileData = new FormData();
  //   fileData.append('file', formData.files[0]);

  //   fetch(
  //     'https://i2vv6fs61f.execute-api.eu-central-1.amazonaws.com/latest/apply-job-email',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       },
  //       body: JSON.stringify({
  //         fileData
  //         // subject: `Apply for a job request`,
  //         // html: `<p>Name: ${formData.name}</p>
  //         // <p>Email: ${formData.email}</p>
  //         // <p>phone: ${formData.phone}</p>
  //         // <p>location(from):${formData.location}</p>
  //         // <p>linkedIn: ${formData.linkedIn}</p>`
  //       })
  //     }
  //   )
  //     .then(response => response)
  //     .then(result => console.log(result.body))
  //     .catch(error => console.log('error', error));
  // };
  const sendEmail = formData => {
    const fileData = new FormData();
    fileData.append('file', formData.files[0]);

    return axios({
      url:
        'https://i2vv6fs61f.execute-api.eu-central-1.amazonaws.com/latest/apply-job-email',
      method: 'POST',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        crossDomain: true
      },
      data: fileData
      // subject: `Apply for a job request`,
      // html: `<p>Name: ${formData.name}</p>
      // <p>Email: ${formData.email}</p>
      // <p>phone: ${formData.phone}</p>
      // <p>location(from):${formData.location}</p>
      // <p>linkedIn: ${formData.linkedIn}</p>`
    });
  };

  return (
    <div className={styles.jobForm}>
      <div className={styles.title}>Fields marked * are required.</div>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => {
          const formData = {
            ...values,
            ...restFormValues
          };
          sendEmail(formData);
          console.log(formData);
        }}
        validationSchema={jobDetailsValidationSchema}
      >
        {({ handleSubmit }) => (
          <Form handleSubmit={handleSubmit}>
            <div className={styles.formSection}>
              <div className={styles.marginTop}>
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
                    setFormData({ ...restFormValues, files: [files[0]] });
                  }}
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
                    value={restFormValues.location}
                    options={locations}
                    placeholder='click here to select'
                    className={styles.input}
                    label='Location*'
                    onChange={e =>
                      setFormData({ ...restFormValues, location: e })
                    }
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
                      ...restFormValues,
                      files: [...restFormValues.files, files[0]]
                    });
                  }}
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
                handleSubmit();
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
