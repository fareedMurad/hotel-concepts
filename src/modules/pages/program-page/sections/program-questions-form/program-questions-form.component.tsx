import * as React from 'react';
import { ProgramQuestionsFormProps } from './program-questions-form.props';
import * as styles from './program-questions-form.scss';
import {
  Form,
  Button,
  Field
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
 * Renders ProgramQuestionsForm
 */
const ProgramQuestionsForm: React.FC<ProgramQuestionsFormProps> = ({}) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <div className={styles.programQuestionsForm}>
       <div className={styles.container}>
         <div className={styles.formWrapper}>
            <div className={styles.title}>Got questions?</div>
            <div className={styles.subtitle}>
              Whether you are an individual or an organisation/group, looking for a
              programme, get in touch and we can help find the best solution for you.
            </div>
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
                      placeholder=''
                    />
                    <Field.Text
                      name='phone'
                      className={styles.email}
                      label='E-mail'
                      placeholder=''
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
                  >
                    <div>Send</div>
                    <div>&#8594;</div>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { ProgramQuestionsForm };
