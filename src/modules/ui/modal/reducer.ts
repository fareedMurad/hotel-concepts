import { ModalState } from './state';
import { reducer } from 'redux-chill';
import {
  showModal,
  closeModal,
  toogleContributorModal,
  toggleBookOverviewModal,
  toggleBookPreviewModal,
  readBook,
  explorePage
} from './actions';
import { Modals } from '@ui/models';

/**
 * modal state
 */
const modal = reducer(new ModalState())
  .on(showModal, (state, { id }) => {
    id.forEach(item => {
      if (state.active.some(one => one == item)) return;

      state.active.push(item);
    });
  })
  .on(closeModal, (state, { id }) => {
    state.active = state.active.filter(item => id.every(one => one != item));
  })
  .on(
    toogleContributorModal,
    (state, payload) => (state.contributorModal = payload)
  )
  .on(
    toggleBookOverviewModal,
    (state, payload) => (state.bookOverviewModal = payload)
  )
  .on(readBook, (state, { url }) => {
    state.readBookUrl = url;
    state.active.push(Modals.bookPreview);
  })
  .on(explorePage, (state, { url }) => {
    debugger;
    state.readBookUrl = url;
    state.active.push(Modals.explorePage);
  });

export { modal };
