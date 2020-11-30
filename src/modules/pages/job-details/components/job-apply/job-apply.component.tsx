import * as React from 'react';
import * as styles from './job-apply.scss';
import { Form, Field, Button, Icon, Preloader } from '@core/components';
import { FormResultModal } from '@pages/components/form-result-modal';
import { Formik } from 'formik';
import { JobApplyProps } from './job-apply.props';
import { JobDetailsFormValues } from '@app/models';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import { jobDetailsValidationSchema } from '@pages/job-details/models';
import { sendForm } from '@app/redux/form';
import { useDispatch } from 'react-redux';
import { useJobDetailsData } from '@pages/job-details/job-details.hook';

/**
 * Renders JobForm
 */
const JobApply: React.FC<JobApplyProps> = ({ job }) => {
  const defaultValues: JobDetailsFormValues = {
    name: '',
    phone: '',
    email: '',
    linkedInUrl: '',
    location: job.location,
    cv: '',
    cover: ''
  };

  const inputLetter = React.useRef<HTMLInputElement>();
  const inputCv = React.useRef<HTMLInputElement>();
  const { locations } = useJobDetailsData();
  const [cover, setLetter] = React.useState(null);
  const [cv, setCv] = React.useState(null);

  const dispatch = useDispatch();
  const [letterError, setLetterError] = React.useState(false);
  const [cvError, setCvError] = React.useState(false);

  return (
    <div className={styles.jobForm}>
      <Preloader id={Preloaders.sendForm}>
        <div className={styles.title}>Fields marked * are required.</div>
        <Formik
          initialValues={defaultValues}
          onSubmit={values => {
            // if (cv === null || cover === null) {
            //   setLetterError(true);
            //   setCvError(true);
            //   return;
            // }

            const formData = {
              ...values,
              cv,
              cover
            };
            dispatch(sendForm.jobDetails(formData));
            setLetterError(false);
            setCvError(false);
            setCv(null);
            setLetter(null);
            console.log(values);
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
                  <label
                    htmlFor='upload-cv'
                    className={styles.labelUploadResume}
                  >
                    Resume/CV*{' '}
                    {cvError && (
                      <span className={styles.error}>
                        is a required field !
                      </span>
                    )}
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
                    {/* <Field.Select
                      name='location'
                      value={}
                      options={locations}
                      placeholder='click here to select'
                      className={styles.input}
                      label='Location*'
                    /> */}
                    <Field.Text
                      className={styles.input}
                      name='location'
                      value={job.location}
                      label='Location*'
                      disabled
                    />
                  </div>

                  <label htmlFor='upload-letter' className={styles.labelUpload}>
                    Cover Letter*{' '}
                    {letterError && (
                      <span className={styles.error}>required field !</span>
                    )}
                  </label>
                  <div
                    className={classNames(styles.hint, {
                      [styles.withFile]: cover
                    })}
                    onClick={() => inputLetter?.current?.click()}
                  >
                    {cover && (
                      <div className={styles.letterFile}>{cover.name}</div>
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
                    }}
                  />
                </div>
              </div>

              <Field.Text
                name='linkedInUrl'
                placeholder='LinkedIn'
                type='text'
                className={styles.inputBottom}
                label='LinkedIn*'
              />
              <Button
                onClick={() => {
                  handleSubmit();
                }}
                className={styles.buttonSubmit}
                type='submit'
                children='Send'
                arrow
              />
            </Form>
          )}
        </Formik>
      </Preloader>
      <FormResultModal />
    </div>
  );
};

export { JobApply };
