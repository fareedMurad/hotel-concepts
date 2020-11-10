import * as React from 'react';
import * as styles from './become-contributing.scss';
import {
  Paragraph,
  Form,
  Field,
  Button,
  SectionTitle,
  Preloader
} from '@core/components';
import { BecomeContributingProps } from './become-contributing.props';
import { ContributorsApplyValues } from '@app/models';
import { FormResultModal } from '@pages/components/form-result-modal';
import { Formik } from 'formik';
import { contributorsApplyValidationSchema } from '@pages/contributors/models';
import { sendForm } from '@app/redux/form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Preloaders } from '@ui/models';

/**
 * default values
 */
const defaultValues: ContributorsApplyValues = {
  name: '',
  specialization: '',
  linkedInUrl: '',
  email: '',
  comment: ''
};
/**
 * Renders BecomeContributing
 */
const BecomeContributing: React.FC<BecomeContributingProps> = ({}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  return (
    <div className={styles.becomeContributing}>
      <div className={styles.wrapper}>
        <Preloader id={Preloaders.sendForm} className={styles.preloader}>
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
              dispatch(sendForm.contributorsApply(values));
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
                    name='linkedInUrl'
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

                <Field.TextArea
                  name='comment'
                  label={t('contributors.form.lable.message')}
                  className={styles.textArea}
                  id='textarea'
                />
                <Button
                  onClick={() => handleSubmit()}
                  className={styles.buttonSubmit}
                  type='submit'
                  children={t('contributors.form.lable.button-text')}
                  arrow
                  width={230}
                />
              </Form>
            )}
          </Formik>
        </Preloader>
      </div>

      <FormResultModal />
    </div>
  );
};
export { BecomeContributing };
