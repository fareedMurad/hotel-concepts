import { HeaderState } from './state';
import { reducer } from 'redux-chill';
import { isBackgroundWhite } from './actions';

const header = reducer(new HeaderState()).on(
  isBackgroundWhite,
  (state, payload) => {
    state.isBackgroundWhite = payload;
  }
);

export { header };
