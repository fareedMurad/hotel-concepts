import { ProfileState } from './state';
import { reducer } from 'redux-chill';
import { getUserInfo, getSecurityInfo, getSettings } from './actions';

/**
 * profile state
 */
const profile = reducer(new ProfileState())
  .on(getUserInfo.success, (state, payload) => {
    state.userInfo = payload;
  })
  .on(getSecurityInfo.success, (state, payload) => {
    state.securityInfo = payload;
  })
  .on(getSettings.success, (state, payload) => {
    state.settings = payload;
  });

export { profile };
