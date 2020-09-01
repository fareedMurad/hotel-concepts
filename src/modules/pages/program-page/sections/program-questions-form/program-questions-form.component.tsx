import * as React from 'react';
import { ProgramQuestionsFormProps } from './program-questions-form.props';
import * as styles from './program-questions-form.scss';
import { Form, Button, Field } from '@core/components';
import { Formik } from 'formik';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [focused, setFocused] = React.useState(false);
  return (
    <div className={styles.programQuestionsForm}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.title}>{t('program-page.form.title')}</div>
          <div className={styles.subtitle}>
            {t('program-page.form.sub-title')}
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
