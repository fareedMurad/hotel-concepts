import { Auth } from '@auth';
import { Uikit } from '@uikit';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as styles from './routes.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@app/redux/state';
import { Toast, Footer, Spinner } from '@core/components';
import { useMediaPoints } from '@core/shared';
import { toogleContributorModal } from '@ui/modal';
import { NotFound } from '@app/components';
import { TestPage } from 'src/modules/test-page';
import { lazy, Fragment, useEffect } from 'react';
import { HeaderMain } from '@core/components/header/header-main';
import { HeaderSecondary } from '@core/components/header/header-secondary';
import { StickyContainer, Sticky } from 'react-sticky';
import { Account } from 'src/modules/account';
import { Interests } from '@pages';
import { MarketplaceProduct } from '@pages/marketplace-product';
import { Cart } from '@pages/cart';
import { getUser } from '@app/redux/auth';
import { checkCart } from '@app/redux/cart';
import { HeaderMobile } from '@core/components/header/header-mobile';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { setBackgroundWhite } from '@core/components/header/store';

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
const Product = lazy(() =>
  import('src/modules/pages').then(({ Product }) => ({
    default: Product
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
const ProgramPage = lazy(() =>
  import('src/modules/pages').then(({ ProgramPage }) => ({
    default: ProgramPage
  }))
);

/**
 * Renders Routes
 */
const Routes: React.FC = () => {
  const { isToastVisible } = useSelector((state: State) => state.ui.toast);
  const { isBackgroundWhite } = useSelector((state: State) => state.header);
  const { authorized } = useSelector((state: State) => state.auth);
  const { mobile } = useMediaPoints();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(checkCart());
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <StickyContainer>
        <div className={styles.routes}>
          {isToastVisible && <Toast />}
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
              {mobile && (
                <Route
                  path={[
                    '/contributors/mentor',
                    '/mentor/:url?/:slug?/:mentorId',
                    '/program/:slug/mentor/:slug',
                    '/program/:slug?/:programId?/mentor/:slug?/:mentorId',
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
              )}
              <Route path='/program/:slug' component={ProgramPage} />
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
              <Route
                path='/category/:categorySlug/product/:id'
                component={Product}
              />
              <Route path='/course-partnership' component={CoursePartnership} />
              <Route exact={mobile} path='/' component={Homepage} />
              <Route path='*' component={NotFound} />
            </Switch>
          </React.Suspense>
          <Footer />
        </div>
      </StickyContainer>
    </Fragment>
  );
};
export { Routes };
