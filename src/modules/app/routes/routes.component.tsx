import { NotFound } from '@app/components';
import { getUser } from '@app/redux/auth';
import { checkCart } from '@app/redux/cart';
import { State } from '@app/redux/state';
import { Auth } from '@auth';
import { RegistrationModal } from '@auth/modals/registration-modal';
import { Footer, Spinner, Toast } from '@core/components';
import { HeaderMain } from '@core/components/header/header-main';
import { HeaderMobile } from '@core/components/header/header-mobile';
import { HeaderSecondary } from '@core/components/header/header-secondary';
import { BasicHead } from '@core/components/seo/basic-head';
import { Interests } from '@pages';
import { Cart } from '@pages/cart';
import { SubscribeBetaSuccessModal } from '@pages/components/subscribe-beta-modal';
import { MarketplaceProduct } from '@pages/marketplace-product';
import { ProgramPage } from '@pages/program-page';
import { Uikit } from '@uikit';
import * as React from 'react';
import { Fragment, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Sticky, StickyContainer } from 'react-sticky';
import { Account } from 'src/modules/account';
import { TestPage } from 'src/modules/test-page';
import * as styles from './routes.scss';

const LearningApproach = lazy(() =>
  import('src/modules/pages').then(({ LearningApproach }) => ({
    default: LearningApproach
  }))
);
const Faq = lazy(() =>
  import('src/modules/pages').then(({ Faq }) => ({ default: Faq }))
);
const Contributors = lazy(() =>
  import('src/modules/pages').then(({ Contributors }) => ({
    default: Contributors
  }))
);
const ContactsPage = lazy(() =>
  import('src/modules/pages').then(({ ContactsPage }) => ({
    default: ContactsPage
  }))
);
const ArticlePage = lazy(() =>
  import('src/modules/pages').then(({ ArticlePage }) => ({
    default: ArticlePage
  }))
);
const PrivacyPolicy = lazy(() =>
  import('src/modules/pages').then(({ PrivacyPolicy }) => ({
    default: PrivacyPolicy
  }))
);
const StoryMission = lazy(() =>
  import('src/modules/pages').then(({ StoryMission }) => ({
    default: StoryMission
  }))
);
const MentorModal = lazy(() =>
  import('src/modules/pages').then(({ MentorModal }) => ({
    default: MentorModal
  }))
);
const ProgramsCatalogue = lazy(() =>
  import('src/modules/pages').then(({ ProgramsCatalogue }) => ({
    default: ProgramsCatalogue
  }))
);
const Insights = lazy(() =>
  import('src/modules/pages').then(({ Insights }) => ({
    default: Insights
  }))
);
const JobDetails = lazy(() =>
  import('src/modules/pages').then(({ JobDetails }) => ({
    default: JobDetails
  }))
);
const JobsList = lazy(() =>
  import('src/modules/pages').then(({ JobsList }) => ({
    default: JobsList
  }))
);
const ForCompanies = lazy(() =>
  import('src/modules/pages').then(({ ForCompanies }) => ({
    default: ForCompanies
  }))
);
const Marketplace = lazy(() =>
  import('src/modules/pages').then(({ Marketplace }) => ({
    default: Marketplace
  }))
);

const CoursePartnership = lazy(() =>
  import('src/modules/pages').then(({ CoursePartnership }) => ({
    default: CoursePartnership
  }))
);
const Homepage = lazy(() =>
  import('src/modules/pages').then(({ Homepage }) => ({
    default: Homepage
  }))
);

/**
 * Renders Routes
 */
const Routes: React.FC = () => {
  const { isToastVisible } = useSelector((state: State) => state.ui.toast);
  const { authorized } = useSelector((state: State) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(checkCart());
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <BasicHead />
      <StickyContainer>
        <div className={styles.routes}>
          {isToastVisible && <Toast />}
          <RegistrationModal />
          <div className={styles.header}>
            <HeaderMobile />
            <HeaderSecondary />
            <Sticky topOffset={40}>
              {({ style }) => (
                <div style={style}>
                  <HeaderMain />
                </div>
              )}
            </Sticky>
          </div>
          <React.Suspense fallback={<Spinner />}>
            <Switch>
              <Route path='/uikit' component={Uikit} />
              <Route path='/testing' component={TestPage} />
              <Route path='/auth' component={Auth} />
              {authorized && <Route path='/account' component={Account} />}

              {/* ROUTES */}
              <Route path='/cart' component={Cart} />
              <Route path='/interests' component={Interests} />
              <Route
                path='/insights/article/:articleId'
                component={ArticlePage}
              />
              <Route path='/contact-us' component={ContactsPage} />
              <Route path='/privacy-policy' component={PrivacyPolicy} />
              <Route path='/about-us' component={StoryMission} />
              {/* {mobile && (
                <Route
                  path={[
                    '/contributors/mentor',
                    '/mentor/:url?/:slug?/:mentorId',
                    '/program/mentor/:slug',
                    '/program/mentor/:slug?/:mentorId',
                    '/contributors/mentor/:slug?/:mentorId'
                  ]}
                  render={() => (
                    <MentorModal
                      hideComponent={() =>
                        dispatch(toogleContributorModal(false))
                      }
                    />
                  )}
                />
              )} */}
              <Route path='/contributors' component={Contributors} />
              <Route path='/faq' component={Faq} />
              <Route
                path='/programs-catalogue/:id'
                component={ProgramsCatalogue}
              />
              <Route path='/learning-approach' component={LearningApproach} />
              <Route path='/insights' component={Insights} />
              <Route path='/jobs/job-details/:id' component={JobDetails} />
              <Route path='/jobs' component={JobsList} />
              <Route path='/for-companies' component={ForCompanies} />
              <Route path='/marketplace/:id' component={MarketplaceProduct} />
              <Route path='/marketplace' component={Marketplace} />
              <Route path='/program' component={ProgramPage} />
              <Route path='/course-partnership' component={CoursePartnership} />
              <Route path='/' component={Homepage} />
              <Route path='*' component={NotFound} />
            </Switch>
          </React.Suspense>
          <Footer />
        </div>
      </StickyContainer>
      <SubscribeBetaSuccessModal />
    </Fragment>
  );
};
export { Routes };
