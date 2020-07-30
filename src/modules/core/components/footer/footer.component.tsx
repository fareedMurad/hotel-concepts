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
import axios from 'axios';

import * as yup from 'yup';

/**
 * validation schema
 */

const validationSchema = yup.object<{ email: string }>().shape({
  email: yup
    .string()
    .email()
    .label('E-mail')
    .required()
});
/**
 * query categories of programs
 */
const CATEGORIES = gql`
  {
    courseCategoryCollection(
      limit: 5
      order: sys_firstPublishedAt_DESC
      locale: "en-US"
    ) {
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

  const subscribe = async email => {
    await axios
      .post('https://us17.api.mailchimp.com/3.0/lists/6584bef461/members', {
        headers: {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':
            'GET, POST, PATCH, DELETE, PUT, OPTIONS',
          'Access-Control-Allow-Credentials': 'true',
          'content-type': 'application/json',
          Origin: 'https://dev.d3fbrpbky13ysk.amplifyapp.com',
          Authorization: 'Bearer b39036c919aa93c2607bff916ca0b1e1-us17'
        },
        data: JSON.stringify({
          email_address: email,
          status: 'subscribed'
        })
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

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
              subscribe(values.email);
            }}
            validationSchema={validationSchema}
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
