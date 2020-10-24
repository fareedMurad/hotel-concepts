import { HeaderState } from './state';
import { reducer } from 'redux-chill';
import { isBackgroundWhite, setStickyHeader } from './actions';

const header = reducer(new HeaderState())
  .on(isBackgroundWhite, (state, payload) => {
    state.isBackgroundWhite = payload;
  })
  .on(setStickyHeader, (state, payload) => {
    state.isHeaderSticky = payload;
  });

export { header };
