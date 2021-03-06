import * as React from 'react';
import * as styles from './partner-apply.scss';
import {
  H2,
  Paragraph,
  Form,
  Button,
  Field,
  Icon,
  Select,
  SectionTitle,
  Preloader
} from '@core/components';
import { FAQFormValidationSchema } from '@pages/faq/models/validation';
import { FAQFormValues } from '@app/models';
import { FormResultModal } from '../form-result-modal';
import { Formik } from 'formik';
import { PartnerApplyProps } from './partner-apply.props';
import { Preloaders } from '@ui/models';
import { sendForm } from '@app/redux/form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

/**
 * Default values
 */

const defaultValues: FAQFormValues = {
  name: '',
  email: '',
  comment: '',
  accept: false,
  subject: 'Kordie.com - Partnership Page'
};
/**
 * Renders PartnerApply
 */

const PartnerApply: React.FC<PartnerApplyProps> = ({ title, subtitle }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className={styles.partnerApply} id='get-involved'>
      <div className={styles.container}>
        <Preloader id={Preloaders.sendForm}>
          <div className={styles.formWrapper}>
            <SectionTitle className={styles.formTitle}>{title}</SectionTitle>
            <Paragraph className={styles.paragraph}>{subtitle} </Paragraph>
            <Formik
              initialValues={defaultValues}
              onSubmit={values => {
                dispatch(sendForm.faq(values));
              }}
              validationSchema={FAQFormValidationSchema}
            >
              {({ handleSubmit }) => (
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
                        name='email'
                        className={styles.email}
                        label={t('program-page.partner-apply.lable.email')}
                        placeholder='example@gmail.com'
                      />
                    </div>
                    <Field.TextArea
                      name='comment'
                      label='Message'
                      className={styles.textarea}
                    />
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
        </Preloader>
      </div>
      <FormResultModal />
    </div>
  );
};

export { PartnerApply };
