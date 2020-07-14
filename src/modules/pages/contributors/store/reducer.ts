import { ContributorsState } from "./state";
import { reducer } from 'redux-chill'

/**
 * contributors state
 */
const contributors = reducer(new ContributorsState());

export { contributors };