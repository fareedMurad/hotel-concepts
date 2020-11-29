import * as React from 'react';
import * as styles from './footer.scss';
import * as yup from 'yup';
import { NavLink, Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Button } from '../button';
import { Field } from '../field';
import { FooterProps } from './footer.props';
import { Form } from '../form-old';
import { FormResultSubscriptionModal } from '@pages/components/form-result-modal/form-result-subscription-modal';
import { Formik } from 'formik';
import { Icon } from '../icon';
import { Preloader } from '../preloader';
import { Preloaders } from '@ui/models';
import { sendForm } from '@app/redux/form';
import { useDispatch } from 'react-redux';
import { useFooterData } from './footer.hook';
import { useTranslation } from 'react-i18next';

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
        const { caption, to, target, ...rest } = link;
        //#non clickable
        const exceptions = ['FAQ', 'Help Center', 'Company'];
        const isException = exceptions.includes(caption);
        if (target)
          return isException ? (
            <div key={caption} style={{ display: 'inline' }}>
              {caption}
            </div>
          ) : (
            <a key={caption} href={target} target={'__blanc'}>
              {caption}
            </a>
          );

        return isException ? (
          <div key={caption} style={{ display: 'inline' }}>
            {rest.name ? rest.name : caption}
          </div>
        ) : (
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
        // <a href={item.to} className={styles.social} key={item.id}>
        //   <Icon className={styles.socialIcon} name={`socials/${item.img}`} />
        // </a>
        <div className={styles.social} key={item.id}>
          <Icon className={styles.socialIcon} name={`socials/${item.img}`} />
        </div>
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
  const { t } = useTranslation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!loading) {
      setCategories(data.courseCategoryCollection.items);
    }
  });

  return (
    <React.Fragment>
      <FormResultSubscriptionModal />
      <div className={styles.footer} id='footer'>
        <div className={styles.content}>
          <section className={styles.subscribe}>
            <div className={styles.title}>
              <div>{t('footer.form.title')}</div>
              <div>{t('footer.form.description')}</div>
            </div>
            <Preloader id={Preloaders.formSubscription}>
              <Formik
                initialValues={{ email: '' }}
                onSubmit={values => {
                  const payload = {
                    subject: `Form 'Subscribe'`,
                    data: { email: values.email }
                  };
                  dispatch(sendForm.subscription(payload));
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
            </Preloader>
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
            {/* #non-clickable */}

            {/* <Link to='/privacy-policy' className={styles.policy}>
              {t('footer.copyrights.p-p')}
            </Link>
            <Link to='/' className={styles.terms}>
              {t('footer.copyrights.terms')}
            </Link> */}

            <div className={styles.policy}>{t('footer.copyrights.p-p')}</div>
            <div className={styles.terms}>{t('footer.copyrights.terms')}</div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export { Footer };
