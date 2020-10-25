import { HeaderState } from './state';
import { reducer } from 'redux-chill';
import { setBackgroundWhite } from './actions';

const header = reducer(new HeaderState()).on(
  setBackgroundWhite,
  (state, payload) => {
    state.isBackgroundWhite = payload;
  }
);

export { header };
