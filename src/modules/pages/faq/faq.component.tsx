import * as React from 'react';
import { FaqProps } from './faq.props';
import * as styles from './faq.scss';
import { Header } from '@core/components/header';
import {
  H2,
  ButtonFilter,
  Footer,
  H3,
  Field,
  Form,
  Button
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
      <H2>
        Relax because we always <br /> be here for you.
      </H2>
    </div>
    <FaqBlock className={styles.faqWrapper} />
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          Don't like forms? Send us an{' '}
          <span style={{ textDecoration: 'underline' }}>email</span>
        </div>
        <div>
          <H3>Let's talk about everything.</H3>
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
                <textarea name='comment' className={styles.textArea} />
                <div className={styles.submitForm}>
                  <Field.Checkbox
                    name='accept'
                    label='Accept terms & Conditions'
                  />
                  <Button
                    onClick={() => handleSubmit()}
                    className={styles.submitButton}
                  >
                    <div>Send</div> <div>&#8594;</div>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className={styles.footerHr} />
    </footer>
    <Footer />
  </div>
);

export { Faq };
