import { Auth } from '@auth';
import { Profile } from '@profile';
import { Uikit } from '@uikit';
import * as React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as styles from './routes.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@app/store/state';
import { Toast } from '@core/components';
import {
  LearningApproach,
  Faq,
  Contributors,
  ContactsPage,
  ArticlePage,
  PrivacyPolicy,
  StoryMission,
  MentorModal,
  ProgramPage,
  ProgramsCatalogue,
  Insights,
  JobDetails,
  JobsList,
  ForCompanies,
  Marketplace,
  Product,
  CoursePartnership,
  Homepage
} from 'src/modules/pages';

import { useMediaPoints } from '@core/shared';
import { toogleContributorModal } from '@ui/modal';
import { NotFound } from '@app/components';

/**
 * Renders Routes
 */
const Routes: React.FC = () => {
  const { isToastVisible } = useSelector((state: State) => state.ui.toast);
  const { mobile } = useMediaPoints();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={styles.routes}>
      {isToastVisible && <Toast />}
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route path='/auth' component={Auth} />
        <Route path='/uikit' component={Uikit} />

        {/* ROUTES */}
        <Route path='/insights/article/:articleId' component={ArticlePage} />
        <Route path='/contact-us' component={ContactsPage} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/about-us' component={StoryMission} />
        {mobile && (
          <Route
            path={[
              '/contributors/mentor',
              '/mentor/:url?/:slug?/:mentorId',
              '/program/:slug/mentor/:slug'
            ]}
            render={() => (
              <MentorModal
                hideComponent={() => dispatch(toogleContributorModal(false))}
              />
            )}
          />
        )}
        <Route exact={mobile} path='/program/:slug' component={ProgramPage} />
        <Route exact={mobile} path='/contributors' component={Contributors} />
        <Route path='/faq' component={Faq} />
        <Route path='/programs-catalogue/:id' component={ProgramsCatalogue} />
        <Route path='/learning-approach' component={LearningApproach} />
        <Route path='/insights' component={Insights} />
        <Route path='/jobs/job-details/:id' component={JobDetails} />
        <Route path='/jobs' component={JobsList} />
        <Route path='/for-companies' component={ForCompanies} />
        <Route path='/marketplace' component={Marketplace} />
        <Route path='/product/:id' component={Product} />
        <Route path='/course-partnership' component={CoursePartnership} />
        <Route exact={mobile} path='/' component={Homepage} />
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
export { Routes };
