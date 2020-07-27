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
  return (
    <div className={styles.partnerApply} id='get-involved'>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <SectionTitle className={styles.formTitle}>{title}</SectionTitle>
          <Paragraph className={styles.paragraph}>{subtitle} </Paragraph>
          <Formik
            initialValues={defaultValues}
            onSubmit={values => {
              console.log(values);
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
                      label='Name'
                      placeholder='John'
                    />
                    <Field.Text
                      name='phone'
                      className={styles.email}
                      label='E-mail'
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
                    label='Accept Terms & Conditions'
                  />

                  <Button
                    // onClick={() => {
                    //   handleSubmit(), validateForm();
                    // }}
                    //
                    className={styles.buttonSubmit}
                    type='submit'
                    children='Send'
                    arrow='&#8594;'
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
