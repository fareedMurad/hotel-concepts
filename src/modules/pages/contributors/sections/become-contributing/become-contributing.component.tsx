import * as React from 'react';
import { BecomeContributingProps } from './become-contributing.props';
import * as styles from './become-contributing.scss';
import { Paragraph, Form, Field, Button, SectionTitle } from '@core/components';
import { Formik } from 'formik';

/**
 * default values
 */
const defaultValues = {
  name: '',
  specialisation: '',
  linkedIn: '',
  email: ''
};
/**
 * Renders BecomeContributing
 */
const BecomeContributing: React.FC<BecomeContributingProps> = ({}) => {
  const [formData, setFormData] = React.useState({
    name: 'hello',
    specialization: '',
    linkedIn: '',
    email: '',
    message: ''
  });

  return (
    <div className={styles.becomeContributing}>
      <div className={styles.wrapper}>
        <div id='become-contributor' />
        <SectionTitle>Become a contributing expert</SectionTitle>
        <Paragraph className={styles.paragraph}>
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
          onSubmit={values => {}}
          // validationSchema={} add later
        >
          {({ handleSubmit }) => (
            <Form handleSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <Field.Text
                  value={formData.name}
                  name='name'
                  label='Name*'
                  className={styles.formInput}
                  placeholder='John'
                  onChange={e => setFormData({ ...formData, name: e })}
                />
                <Field.Text
                  value={formData.specialization}
                  name='specialisation'
                  label='Specialisation*'
                  className={styles.formInput}
                  placeholder='Marketing'
                  onChange={e =>
                    setFormData({ ...formData, specialization: e })
                  }
                />
              </div>
              <div className={styles.formGroup}>
                <Field.Text
                  value={formData.linkedIn}
                  name='linkedIn'
                  label='LinkedIn profile*'
                  className={styles.formInput}
                  placeholder='linkedin.com/in/username'
                  onChange={e => setFormData({ ...formData, linkedIn: e })}
                />
                <Field.Text
                  name='email'
                  label='Contact e-mail*'
                  className={styles.formInput}
                  placeholder='example@gmail.com'
                />
              </div>

              <div style={{ marginTop: 14 }}>Message</div>
              <textarea className={styles.textArea} />
              <Button
                onClick={() => handleSubmit()}
                className={styles.buttonSubmit}
                type='submit'
                children='Send Request'
                arrow='&#8594;'
                width={230}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export { BecomeContributing };
