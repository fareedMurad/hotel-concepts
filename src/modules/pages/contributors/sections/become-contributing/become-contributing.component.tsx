import * as React from 'react';
import { BecomeContributingProps } from './become-contributing.props';
import * as styles from './become-contributing.scss';
import { Paragraph, Form, Field, Button, SectionTitle } from '@core/components';
import { Formik } from 'formik';
import axios from 'axios';
import { contributorsApplyValidationSchema } from '@pages/contributors/models';
import { enviroment } from 'src/environment';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const sendContributorApplyEmail = async (formData, message) => {
    await axios(`${enviroment.apiUrl}/apply-contributor-email`, {
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
    });
    return setSent(true);
  };

  return (
    <div className={styles.becomeContributing}>
      <div className={styles.wrapper}>
        <div id='become-contributor' />
        <SectionTitle>{t('contributors.form.title')}</SectionTitle>
        <div className={styles.becomeContributingText}>
          <Paragraph className={styles.paragraph}>
            {t('contributors.form.description-one')}
          </Paragraph>
          <Paragraph>{t('contributors.form.description-two')}</Paragraph>
        </div>
        <div className={styles.rule}>{t('contributors.form.rule')}</div>
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
                  label={t('contributors.form.lable.name')}
                  className={styles.formInput}
                  placeholder='John'
                />
                <Field.Text
                  name='specialization'
                  label={t('contributors.form.lable.specialization')}
                  className={styles.formInput}
                  placeholder='Marketing'
                />
              </div>
              <div className={styles.formGroup}>
                <Field.Text
                  name='linkedIn'
                  label={t('contributors.form.lable.linkedin')}
                  className={styles.formInput}
                  placeholder='linkedin.com/in/username'
                />
                <Field.Text
                  name='email'
                  label={t('contributors.form.lable.email')}
                  className={styles.formInput}
                  placeholder='example@gmail.com'
                />
              </div>

              <label
                htmlFor='textarea'
                className={styles.textAreaLabel}
                style={{ marginTop: 14 }}
              >
                {t('contributors.form.lable.message')}
              </label>
              <textarea
                value={message}
                className={styles.textArea}
                id='textarea'
                onChange={e => setMessage(e.target.value)}
              />
              <Button
                onClick={() => handleSubmit()}
                className={styles.buttonSubmit}
                type='submit'
                children={t('contributors.form.lable.button-text')}
                arrow
                width={230}
              />
              {sent && <div>{t('contributors.form.send-successful')}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export { BecomeContributing };
