import { reducer } from 'redux-chill';
import { startup, toggleCookieBanner } from './actions';

/**
 * General app state
 */
const general = reducer({
  isReady: false,
  isCookieBanner: true
})
  .on(startup.success, state => {
    state.isReady = true;
  })
  .on(toggleCookieBanner, (state, payload) => {
    state.isCookieBanner = payload;
  });

export { general };
