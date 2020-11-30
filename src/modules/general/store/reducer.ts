import { reducer } from 'redux-chill';
import { checkBrowserVersion, startup, toggleCookieBanner } from './actions';

/**
 * General app state
 */
const general = reducer({
  isReady: false,
  isCookieBanner: true,
  browserVersion: {
    name: '',
    version: ''
  }
})
  .on(startup.success, state => {
    state.isReady = true;
  })
  .on(toggleCookieBanner, (state, payload) => {
    state.isCookieBanner = payload;
  })
  .on(checkBrowserVersion, (state, payload) => {
    state.browserVersion = payload;
  });

export { general };
