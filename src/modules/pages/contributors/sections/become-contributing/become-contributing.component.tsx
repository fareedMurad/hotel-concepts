import * as React from 'react';
import { BecomeContributingProps } from './become-contributing.props';
import * as styles from './become-contributing.scss';
import { Paragraph, Form, Field, Button, SectionTitle } from '@core/components';
import { Formik } from 'formik';
import axios from 'axios';
import { contributorsApplyValidationSchema } from '@pages/contributors/models';

/**
 * default values
 */
const defaultValues = {
  name: '',
  specialization: '',
  linkedIn: '',
  email: '',
  message: ''
};
/**
 * Renders BecomeContributing
 */
const BecomeContributing: React.FC<BecomeContributingProps> = ({}) => {
  const [message, setMessage] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const sendContributorApplyEmail = async (formData, message) => {
    await axios(
      'https://i2vv6fs61f.execute-api.eu-central-1.amazonaws.com/latest/apply-contributor-email',
      {
        method: 'post',
        data: {
          subject: 'Contributor Apply',
          html: `<p>Name: ${formData.name}</p> 
                <p>Specialization: ${formData.specialization}</p>
                <pEmail: ${formData.email}</p>
                <p>LinkedIn profile: ${formData.linkedIn}
                <p>${message}</p>
                `
        }
      }
    );
    return setSent(true);
  };

  return (
    <div className={styles.becomeContributing}>
      <div className={styles.wrapper}>
        <div id='become-contributor' />
        <SectionTitle>Become a contributing expert</SectionTitle>
        <Paragraph className={styles.paragraph}>
          Interested in contributing to providing top class <br /> hospitality
          online education?
        </Paragraph>
        <Paragraph>
          Explore here to learn how you could be a part of it <br />
          through sharing your expertise.
        </Paragraph>
        <div className={styles.rule}>Fields marked * are required.</div>
        <Formik
          initialValues={defaultValues}
          onSubmit={values => {
            sendContributorApplyEmail(values, message);
            console.log(values);
          }}
          validationSchema={contributorsApplyValidationSchema}
        >
          {({ handleSubmit }) => (
            <Form handleSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <Field.Text
                  name='name'
                  label='Name*'
                  className={styles.formInput}
                  placeholder='John'
                />
                <Field.Text
                  name='specialization'
                  label='Specialization*'
                  className={styles.formInput}
                  placeholder='Marketing'
                />
              </div>
              <div className={styles.formGroup}>
                <Field.Text
                  name='linkedIn'
                  label='LinkedIn profile*'
                  className={styles.formInput}
                  placeholder='linkedin.com/in/username'
                />
                <Field.Text
                  name='email'
                  label='Contact e-mail*'
                  className={styles.formInput}
                  placeholder='example@gmail.com'
                />
              </div>

              <div style={{ marginTop: 14 }}>Message</div>
              <textarea
                value={message}
                className={styles.textArea}
                onChange={e => setMessage(e.target.value)}
              />
              <Button
                onClick={() => handleSubmit()}
                className={styles.buttonSubmit}
                type='submit'
                children='Send Request'
                arrow='&#8594;'
                width={230}
              />
              {sent && <div>Your apply successfuly sent</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export { BecomeContributing };
