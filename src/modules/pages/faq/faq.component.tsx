import * as React from 'react';
import * as styles from './faq.scss';
import {
  Footer,
  H3,
  Field,
  Form,
  Button,
  PreCaption,
  SectionTitle,
  Preloader
} from '@core/components';
import { FAQFormValidationSchema } from './models/validation';
import { FAQFormValues } from '@app/models/form';
import { FaqBlock } from '@pages/components';
import { FaqProps } from './faq.props';
import { Formik } from 'formik';
import { Preloaders } from '@ui/models';
import { sendForm } from '@app/redux/form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FormResultModal } from '@pages/components/form-result-modal';

/**
 * Init values
 */
const initialValues: FAQFormValues = {
  name: '',
  email: '',
  comment: '',
  accept: false
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
        <Preloader id={Preloaders.sendForm} className={styles.preloader}>
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
                  dispatch(sendForm.faq(values));
                }}
                validationSchema={FAQFormValidationSchema}
              >
                {({ handleSubmit }) => (
                  <Form>
                    <div className={styles.formInputs}>
                      <Field.Text
                        name='name'
                        label={t('faq.form.lable.name')}
                      />
                      <Field.Text
                        name='email'
                        type='email'
                        label={t('faq.form.lable.email')}
                      />
                    </div>
                    <Field.TextArea
                      name='comment'
                      className={styles.textArea}
                      label={t('faq.form.lable.comment')}
                    />
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
        </Preloader>
      </footer>
      <FormResultModal />
      {/* <Footer /> */}
    </div>
  );
};

export { Faq };
