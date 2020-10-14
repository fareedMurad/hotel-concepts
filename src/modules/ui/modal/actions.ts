import { make } from 'redux-chill';
import { ensureIsList } from '@core/shared';

/**
 * Show Modal
 */
const showModal = make('[ui] show modal').stage((id: any | any[]) => ({
  id: ensureIsList(id)
}));

/**
 * Close Modal
 */
const closeModal = make('[ui] close modal').stage((id: any | any[]) => ({
  id: ensureIsList(id)
}));

/**
 * Contributor modal
 */
const toogleContributorModal = make('[ui] open contributor').stage(
  (payload: boolean) => payload
);

/*
 * Book overview modal
 */
const toggleBookOverviewModal = make('[ui] toggle book overview').stage(
  (payload: boolean) => payload
);

/**
 * Toggle book read
 */
const readBook = make('[ui] read book').stage(
  (payload: { url: string }) => payload
);

/**
 * Toggle explore page
 */
const explorePage = make('[ui] explore page').stage(
  (payload: { url: string }) => payload
);

/**
 * Book preview modal
 */
const toggleBookPreviewModal = make('[ui] open book preview').stage(
  (payload: boolean) => payload
);

export {
  showModal,
  closeModal,
  toogleContributorModal,
  readBook,
  toggleBookOverviewModal,
  toggleBookPreviewModal,
  explorePage
};
