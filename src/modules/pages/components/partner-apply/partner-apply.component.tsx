import * as React from 'react';
import { PartnerApplyProps } from './partner-apply.props';
import * as styles from './partner-apply.scss';
import {
  H2,
  Paragraph,
  Form,
  Button,
  Field,
  Icon,
  Select,
  SectionTitle
} from '@core/components';
import { Formik } from 'formik';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { sendForm } from '@app/redux/form';

/**
 * Default values
 */

const defaultValues = {
  name: '',
  email: '',
  comment: ''
};
/**
 * Renders PartnerApply
 */

const PartnerApply: React.FC<PartnerApplyProps> = ({ title, subtitle }) => {
  const [focused, setFocused] = React.useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className={styles.partnerApply} id='get-involved'>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <SectionTitle className={styles.formTitle}>{title}</SectionTitle>
          <Paragraph className={styles.paragraph}>{subtitle} </Paragraph>
          <Formik
            initialValues={defaultValues}
            onSubmit={values => {
              const payload = {
                subject: `Form 'Got questions?'`,
                data: values
              };
              dispatch(sendForm(payload));
            }}
            // validationSchema={jobDetailsValidationSchema}
          >
            {({ handleSubmit, validateForm }) => (
              <Form handleSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formSection}>
                  <div className={styles.formSectionMainInfo}>
                    <Field.Text
                      name='name'
                      className={styles.name}
                      label={t('program-page.partner-apply.lable.name')}
                      placeholder='John'
                    />
                    <Field.Text
                      name='phone'
                      className={styles.email}
                      label={t('program-page.partner-apply.lable.email')}
                      placeholder='example@gmail.com'
                    />
                  </div>
                  <div
                    className={classNames(styles.comment, {
                      [styles.commentFocused]: focused
                    })}
                  >
                    <label htmlFor='comment' className={styles.label}>
                      Comment
                    </label>
                    <textarea
                      id='comment'
                      name={t('program-page.partner-apply.lable.comment')}
                      className={styles.input}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    />
                  </div>
                </div>

                <div className={styles.send}>
                  <Field.Checkbox
                    name='accept'
                    label={t('program-page.partner-apply.lable.accept')}
                  />

                  <Button
                    onClick={() => {
                      handleSubmit();
                    }}
                    className={styles.buttonSubmit}
                    type='submit'
                    children={t('program-page.partner-apply.button-text')}
                    arrow
                    width={204}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {/* <div className={styles.hr} /> */}
      </div>
    </div>
  );
};

export { PartnerApply };
