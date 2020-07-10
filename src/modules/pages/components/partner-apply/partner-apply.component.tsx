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
  Select
} from '@core/components';
import { Formik } from 'formik';
import classNames from 'classnames';

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

const PartnerApply: React.FC<PartnerApplyProps> = ({}) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <div className={styles.partnerApply} id='get-involved'>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <H2>Want to get involved?</H2>
          <Paragraph>
            We’re always happy to talk if you are interested in becoming a
            Partner{' '}
          </Paragraph>
          <Formik
            initialValues={defaultValues}
            onSubmit={values => {
              console.log(values);
            }}
            // validationSchema={jobDetailsValidationSchema}
          >
            {({ handleSubmit, validateForm }) => (
              <Form handleSubmit={handleSubmit}>
                <div className={styles.formSection}>
                  <div className={styles.formSectionMainInfo}>
                    <Field.Text
                      name='name'
                      className={styles.name}
                      label='Name'
                    />
                    <Field.Text
                      name='phone'
                      className={styles.email}
                      label='E-mail'
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
                      name='Comment'
                      className={styles.input}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    />
                  </div>
                </div>

                <div className={styles.send}>
                  <Field.Checkbox
                    name='accept'
                    label='Accept Terms and Conditions'
                  />

                  <Button
                    // onClick={() => {
                    //   handleSubmit(), validateForm();
                    // }}
                    //
                    className={styles.buttonSubmit}
                    type='submit'
                  >
                    <div>Send</div>
                    <div>&#8594;</div>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.hr} />
      </div>
    </div>
  );
};

export { PartnerApply };
