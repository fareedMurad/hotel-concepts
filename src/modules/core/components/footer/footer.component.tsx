import * as React from 'react';
import { FooterProps } from './footer.props';
import * as styles from './footer.scss';
import { H2 } from '../typography';
import { Button } from '../button';
import { NavLink } from 'react-router-dom';
import { useFooterData } from './footer.hook';
import { Formik } from 'formik';
import { Form } from '../form';
import { Field } from '../field';

const Navigation: React.FC<{ caption: string; navigation: any[] }> = ({
  caption,
  navigation
}) => {
  return (
    <div className={styles.navigationItem}>
      <div className={styles.navigationCaption}>{caption}</div>
      <div className={styles.navigationLinks}>
        {navigation.map(link => {
          const { id, caption, to } = link;
          return (
            <NavLink key={id} to={to}>
              {caption}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
/**
 * Renders Footer
 */
const Footer: React.FC<FooterProps> = ({}) => {
  const { companyLinks, weprovideLinks, moreLinks } = useFooterData();

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <section className={styles.subscribe}>
          <H2>
            Sign up <br />
            to newsletter
          </H2>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={values => {
              // dispatch(action(values));
              console.log(values)
            }}
            // validationSchema={} add later
          >
            {({ handleSubmit }) => (
              <Form handleSubmit={handleSubmit}>
                <div className={styles.submitForm}>
                  <Field.Text
                    name='email'
                    label='E-mail'
                    type='email'
                    className={styles.formInput}
                  />
                  <Button
                    onClick={() => handleSubmit()}
                    className={styles.buttonSubmit}
                    type='submit'
                  >
                    <div>Subscribe</div> <div>&#8594;</div>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
        <section className={styles.navigation}>
          <Navigation caption='Company' navigation={companyLinks} />
          <Navigation caption='We provide' navigation={weprovideLinks} />
          <Navigation caption='More' navigation={moreLinks} />
        </section>
      </div>
      <div className={styles.hr} />
      <footer className={styles.copyrights}>
        <div>© 2019 Cordie. All rights reserved.</div>
        <div className={styles.copyrightsLink}>Privacy Policy</div>
        <div className={styles.copyrightsLink}>Terms and Conditions</div>
      </footer>
    </div>
  );
};

export { Footer };
