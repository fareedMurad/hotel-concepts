import * as React from 'react';
import { FaqProps } from './faq.props';
import * as styles from './faq.scss';

import {
  Footer,
  H3,
  Field,
  Form,
  Button,
  PreCaption,
  SectionTitle
} from '@core/components';
import { Formik } from 'formik';
import { FaqBlock } from '@pages/components';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FAQFormValues } from '@app/models/form';
import { FAQFormValidationSchema } from './faq.model';
import { sendForm } from '@app/redux/form';

/**
 * Init values
 */
const initialValues: FAQFormValues = {
  name: '',
  email: '',
  message: ''
};

/**
 * Renders Faq
 */
const Faq: React.FC<FaqProps> = ({}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className={styles.faq}>
      <div className={styles.container}>
        <SectionTitle>{t('faq.title')}</SectionTitle>
      </div>
      <FaqBlock className={styles.faqWrapper} showTitle={false} />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <PreCaption>
              {t('faq.form.question')}{' '}
              <span style={{ textDecoration: 'underline' }}>email</span>
            </PreCaption>
          </div>
          <div>
            <H3 className={styles.h3}>{t('faq.form.title')}</H3>
          </div>
          <div className={styles.form}>
            <Formik
              initialValues={initialValues}
              onSubmit={values => {
                const payload = {
                  subject: `Form 'FAQ'`,
                  data: values
                };
                dispatch(sendForm(payload));
              }}
              validationSchema={FAQFormValidationSchema}
            >
              {({ handleSubmit }) => (
                <Form>
                  <div className={styles.formInputs}>
                    <Field.Text name='name' label={t('faq.form.lable.name')} />
                    <Field.Text
                      name='email'
                      type='email'
                      label={t('faq.form.lable.email')}
                    />
                  </div>
                  <div className={styles.textAreaWrapper}>
                    <div>{t('faq.form.lable.comment')}</div>
                    <textarea name='comment' className={styles.textArea} />
                  </div>

                  <div className={styles.submitForm}>
                    <Field.Checkbox
                      name='accept'
                      label={t('faq.form.lable.accept-terms')}
                    />
                    <Button
                      onClick={() => handleSubmit()}
                      className={styles.submitButton}
                      children={t('faq.form.lable.button-text')}
                      arrow
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </footer>
      {/* <Footer /> */}
    </div>
  );
};

export { Faq };
