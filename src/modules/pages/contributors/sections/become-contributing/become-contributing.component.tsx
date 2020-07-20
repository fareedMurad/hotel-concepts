import * as React from 'react';
import { BecomeContributingProps } from './become-contributing.props';
import * as styles from './become-contributing.scss';
import { Paragraph, H2, Form, Field, Button } from '@core/components';
import { Formik } from 'formik';
import classNames from 'classnames';

/**
 * default values
 */
const defaultValues = {
  name: '',
  specialisation: '',
  linkedIn: '',
  email: '',
  message: ''
};
/**
 * Renders BecomeContributing
 */
const BecomeContributing: React.FC<BecomeContributingProps> = ({}) => {
  return (
    <div className={styles.becomeContributing}>
      <div className={styles.wrapper}>
        <div id='become-contributor' />
        <H2>Become a contributing expert</H2>
        <Paragraph>
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
            // dispatch(action(values));
            console.log(values);
          }}
          // validationSchema={} add later
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
                  name='specialisation'
                  label='Specialisation*'
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

              <div>Message</div>
              <textarea className={styles.textArea} />
              <Button
                onClick={() => handleSubmit()}
                className={styles.buttonSubmit}
                type='submit'
              >
                <div>Send Request</div> <div>&#8594;</div>
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export { BecomeContributing };
