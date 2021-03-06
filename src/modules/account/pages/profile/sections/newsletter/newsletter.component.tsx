import { Card } from '@account/components';
import { editNewsletterSubscription } from '@app/redux/account';
import { State } from '@app/redux/state';
import { Button, Field, FormNew, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import classNames from 'classnames';
import { Formik } from 'formik';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewsletterProps } from './newsletter.props';
import * as styles from './newsletter.scss';

/**
 * Renders Newsletter
 */
const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: State) => state.auth);

  return (
    <Card
      className={classNames(styles.newsletter, className)}
      title='Newsletter'
    >
      <Preloader id={Preloaders.profileNewsletter} size={75} thickness={4}>
        <Formik
          enableReinitialize
          initialValues={{ newsSub: user?.newsSub }}
          onSubmit={values => {
            dispatch(editNewsletterSubscription(values));
          }}
        >
          {({ handleSubmit }) => (
            <FormNew className={styles.form} handleSubmit={handleSubmit}>
              <Field.Checkbox
                className={styles.agreement}
                labelClassname={styles.agreementLabel}
                name='newsSub'
                label='I agree to service Newsletter and Special Offers.'
              />
              <Button className={styles.submit} onClick={() => handleSubmit()}>
                Save
              </Button>
            </FormNew>
          )}
        </Formik>
      </Preloader>
    </Card>
  );
};

export { Newsletter };
