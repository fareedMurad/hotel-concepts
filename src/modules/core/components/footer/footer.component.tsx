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

const Navigation: React.FC<{ caption: string; navigation: any[], socials?: any[] }> = ({
  caption,
  navigation,
  socials
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
      {socials &&
        socials.map(item => (
          <a href={item.to} className={styles.social} key={item.id}>
            <img src={require(`img/socials/${item.img}.svg`)} alt=""/>
          </a>
      ))}
    </div>
  );
};
/**
 * Renders Footer
 */
const Footer: React.FC<FooterProps> = ({}) => {
  const { companyLinks, weprovideLinks, moreLinks, socials } = useFooterData();

  return (
    <div className={styles.footer} id='footer'>
      <div className={styles.content}>
        <section className={styles.subscribe}>
          <div className={styles.title}>
            <div>
              Sign up <br />
              to newsletter
            </div>
            <div>
              Get fresh ideas and opinion from our <br/>
              worldleading hospitality experts
            </div>
          </div>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={values => {
              // dispatch(action(values));
              console.log(values);
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
          <Navigation caption='Explore Programs' navigation={companyLinks} />
          <Navigation caption='About' navigation={weprovideLinks} />
          <Navigation caption='Support' navigation={moreLinks} socials={socials} />
        </section>
      </div>
      <div className={styles.hr} />
      <footer className={styles.copyrights}>
        <div className={styles.copyrightInfo}>© 2020 Kordie. All rights reserved.</div>
        <div className={styles.copyrightsLinkContainer}>
          <div className={styles.policy}>Privacy Policy</div>
          <div className={styles.terms}>Terms and Conditions</div>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
