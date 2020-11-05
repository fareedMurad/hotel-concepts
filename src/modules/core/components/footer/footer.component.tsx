import * as React from 'react';
import { FooterProps } from './footer.props';
import * as styles from './footer.scss';
import { H2 } from '../typography';
import { Button } from '../button';
import { NavLink, Link } from 'react-router-dom';
import { useFooterData } from './footer.hook';
import { Formik } from 'formik';
import { Form } from '../form-old';
import { Field } from '../field';
import { gql, useQuery } from '@apollo/client';
import axios from 'axios';
import { enviroment } from 'src/environment';

import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Icon } from '../icon';

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
}> = ({ caption, navigation, socials }) => (
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
          <Icon className={styles.socialIcon} name={`socials/${item.img}`} />
        </a>
      ))}
  </div>
);
/**
 * Renders Footer
 */
const Footer: React.FC<FooterProps> = ({}) => {
  const [categories, setCategories] = React.useState([]);
  const { weprovideLinks, moreLinks, socials } = useFooterData();
  const { data, loading, error } = useQuery(CATEGORIES);
  const [sent, setSent] = React.useState(false);
  const { t } = useTranslation();

  React.useEffect(() => {
    if (!loading) {
      setCategories(data.courseCategoryCollection.items);
    }
  });
  const subscribe = async email => {
    await axios(`${enviroment.apiUrl}/send-email`, {
      method: 'post',
      data: {
        email_address: email,
        status: 'pending'
      }
    })
      .then(res => res)
      .catch(err => err.data);
    return setSent(true);
  };

  return (
    <div className={styles.footer} id='footer'>
      <div className={styles.content}>
        <section className={styles.subscribe}>
          <div className={styles.title}>
            <div>{t('footer.form.title')}</div>
            <div>{t('footer.form.description')}</div>
          </div>
          {sent ? (
            <div className={styles.notificationMessage}>
              {t('footer.form.notification-message')}
            </div>
          ) : (
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
                      children={t('footer.form.button-text')}
                      arrow
                      width={176}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </section>
        <section className={styles.navigation}>
          <Navigation
            caption={t('footer.navigation.programs')}
            navigation={categories}
          />
          <Navigation
            caption={t('footer.navigation.about')}
            navigation={weprovideLinks}
          />
          <Navigation
            caption={t('footer.navigation.support')}
            navigation={moreLinks}
            socials={socials}
          />
        </section>
      </div>
      <div className={styles.hr} />
      <footer className={styles.copyrights}>
        <div className={styles.copyrightInfo}>
          {t('footer.copyrights.info')}
        </div>
        <div className={styles.copyrightsLinkContainer}>
          <Link to='/privacy-policy' className={styles.policy}>
            {t('footer.copyrights.p-p')}
          </Link>
          <Link to='/' className={styles.terms}>
            {t('footer.copyrights.terms')}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
