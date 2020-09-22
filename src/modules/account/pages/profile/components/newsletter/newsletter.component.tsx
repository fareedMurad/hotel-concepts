import { setNewsSubscription } from '@app/redux/account';
import { State } from '@app/redux/state';
import { Button, Field, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProfileData } from '../../profile.hook';
import { NewsletterProps } from './newsletter.props';
import * as styles from './newsletter.scss';

/**
 * Renders Newsletter
 */
const Newsletter: React.FC<NewsletterProps> = ({}) => {
  const { user } = useProfileData();
  const { newsSubscriptionSuccess } = useSelector(
    (state: State) => state.account
  );
  const dispatch = useDispatch();
  const defaultValues = {
    newsSub: user?.newsSub
  };
  return (
    <React.Fragment>
      <div className={styles.title}>Newsletter</div>
      <Formik
        initialValues={defaultValues}
        onSubmit={values => {
          console.log(values);
          dispatch(setNewsSubscription(values));
        }}
      >
        {({ handleSubmit }) => (
          <Form className={styles.form}>
            <Field.Checkbox
              name='newsSub'
              label='I agree to service Newsletter and Special Offers.'
            />
            <div style={{ position: 'relative' }}>
              <Button
                disabled={newsSubscriptionSuccess}
                className={styles.formSubmit}
                onClick={() => handleSubmit()}
              >
                {newsSubscriptionSuccess ? 'Saved' : 'Save'}
              </Button>
              <Preloader
                className={styles.preloader}
                id={Preloaders.newsSub}
                size={20}
                thickness={5}
              />
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export { Newsletter };
