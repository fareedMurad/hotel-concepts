import * as React from 'react';
import { FooterProps } from './footer.props';
import * as styles from './footer.scss';
import { H2 } from '../typography';
import { Button } from '../button';
import { NavLink, Link } from 'react-router-dom';
import { useFooterData } from './footer.hook';
import { Formik } from 'formik';
import { Form } from '../form';
import { Field } from '../field';
import { gql, useQuery } from '@apollo/client';
/**
 * query categories of programs
 */
const CATEGORIES = gql`
  {
    courseCategoryCollection(limit: 5) {
      items {
        name
        sys {
          id
        }
      }
    }
  }
`;

const Navigation: React.FC<{
  caption: string;
  navigation: any[];
  socials?: any[];
}> = ({ caption, navigation, socials }) => {
  return (
    <div className={styles.navigationItem}>
      <div className={styles.navigationCaption}>{caption}</div>
      <div className={styles.navigationLinks}>
        {navigation.map((link, idx) => {
          const { caption, to, ...rest } = link;

          return (
            <NavLink
              key={idx}
              to={rest.sys ? `/programs-catalogue/${rest.sys.id}` : to}
            >
              {rest.name ? rest.name : caption}
            </NavLink>
          );
        })}
      </div>
      {socials &&
        socials.map(item => (
          <a href={item.to} className={styles.social} key={item.id}>
            <img src={require(`img/socials/${item.img}.svg`)} alt='' />
          </a>
        ))}
    </div>
  );
};
/**
 * Renders Footer
 */
const Footer: React.FC<FooterProps> = ({}) => {
  const [categories, setCategories] = React.useState([]);
  const { weprovideLinks, moreLinks, socials } = useFooterData();
  const { data, loading, error } = useQuery(CATEGORIES);
  React.useEffect(() => {
    if (!loading) {
      setCategories(data.courseCategoryCollection.items);
    }
  });

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
              Get fresh ideas and opinion from our <br />
              worldleading hospitality experts
            </div>
          </div>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={values => {
              console.log(values);
            }}
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
                    children='Subscribe'
                    arrow='&#8594;'
                    width={176}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </section>
        <section className={styles.navigation}>
          <Navigation caption='Explore Programs' navigation={categories} />
          <Navigation caption='About' navigation={weprovideLinks} />
          <Navigation
            caption='Support'
            navigation={moreLinks}
            socials={socials}
          />
        </section>
      </div>
      <div className={styles.hr} />
      <footer className={styles.copyrights}>
        <div className={styles.copyrightInfo}>
          © 2020 Kordie. All rights reserved.
        </div>
        <div className={styles.copyrightsLinkContainer}>
          <Link to='/privacy-policy' className={styles.policy}>
            Privacy Policy
          </Link>
          <Link to='/' className={styles.terms}>
            Terms and Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
