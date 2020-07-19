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

export { showModal, closeModal, toogleContributorModal };
