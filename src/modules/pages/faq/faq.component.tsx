import * as React from 'react';
import { FaqProps } from './faq.props';
import * as styles from './faq.scss';
import { Header } from '@core/components/header';
import {
  H2,
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
/**
 * Renders Faq
 */
const Faq: React.FC<FaqProps> = ({}) => (
  <div className={styles.faq}>
    <Header whiteBackground />
    <div className={styles.container}>
      <SectionTitle>
        Relax because we always <br /> be here for you.
      </SectionTitle>
    </div>
    <FaqBlock className={styles.faqWrapper} showTitle={false} />
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <PreCaption>
            Don't like forms? Send us an{' '}
            <span style={{ textDecoration: 'underline' }}>email</span>
          </PreCaption>
        </div>
        <div>
          <H3 className={styles.h3}>Let's talk about everything.</H3>
        </div>
        <div className={styles.form}>
          <Formik
            initialValues={{ name: '', email: '', comment: '' }}
            onSubmit={values => console.log(values)}
            // validationSchema={} add later
          >
            {({ handleSubmit }) => (
              <Form>
                <div className={styles.formInputs}>
                  <Field.Text name='name' label='Name' />
                  <Field.Text name='email' type='email' label='E-mail' />
                </div>
                <div className={styles.textAreaWrapper}>
                  <div>Comment</div>
                  <textarea name='comment' className={styles.textArea} />
                </div>

                <div className={styles.submitForm}>
                  <Field.Checkbox
                    name='accept'
                    label='Accept terms & Conditions'
                  />
                  <Button
                    onClick={() => handleSubmit()}
                    className={styles.submitButton}
                    children='Send'
                    arrow='&#8594;'
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </footer>
    <Footer />
  </div>
);

export { Faq };
