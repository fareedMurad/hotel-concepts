import { put } from 'redux-saga/effects';
import { Payload, Saga } from 'redux-chill';
import { showModal, toogleContributorModal } from './actions';
import { Modals } from '@ui/models';

class ModalSaga {
  @Saga(toogleContributorModal)
  public *toggleContributorModal() {
    yield put(showModal(Modals.contributor));
  }
}

export { ModalSaga };
