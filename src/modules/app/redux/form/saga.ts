import { Payload, Saga } from 'redux-chill';
import { all, call, delay, put } from 'redux-saga/effects';
import { preloaderStart, preloaderStop } from '@ui/preloader';
import { Context } from '../context';
import { Modals, Preloaders } from '@ui/models';
import { handleError } from '@general/store/actions';
import { sendForm } from './actions';
import { showModal } from '@ui/modal';
import { JobDetailsFormValues } from '@app/models';
/**
 * form saga
 */
class FormSaga {
  /*
   * Send form saga
   */
  @Saga(sendForm)
  public *sendForm(payload: Payload<typeof sendForm>, { api }: Context) {
    yield put(preloaderStart(Preloaders.sendForm));
    try {
      yield call(api.form.sendForm, payload);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.sendForm));
    }
  }
  /**
   * Consult request
   */
  @Saga(sendForm.consultRequest)
  public *sendConsultRequest(
    payload: Payload<typeof sendForm.consultRequest>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.sendForm));
    try {
      const response = yield call(api.form.sendFormConsultRequest, payload);
      /**
       * Effects
       */
      const effects = [put(showModal(Modals.formResult))];
      yield all(effects);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.sendForm));
    }
  }
  /**
   *
   */
  @Saga(sendForm.contributorsApply)
  public *sendContributorsApply(
    payload: Payload<typeof sendForm.contributorsApply>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.sendForm));
    try {
      const response = yield call(api.form.sendContributorsApply, payload);
      /**
       * Effects
       */
      const effects = [put(showModal(Modals.formResult))];
      yield all(effects);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.sendForm));
    }
  }
  /**
   * Send contac us form
   */
  @Saga(sendForm.contactUs)
  public *sendContactUs(
    payload: Payload<typeof sendForm.contactUs>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.sendForm));
    try {
      const response = yield call(api.form.sendContactUs, payload);
      /**
       * Effects
       */
      const effects = [put(showModal(Modals.formResult))];
      yield all(effects);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.sendForm));
    }
  }
  /**
   * Send contac us form
   */
  @Saga(sendForm.faq)
  public *sendFAQ(payload: Payload<typeof sendForm.faq>, { api }: Context) {
    yield put(preloaderStart(Preloaders.sendForm));
    try {
      const response = yield call(api.form.sendFaq, payload);
      /**
       * Effects
       */
      const effects = [put(showModal(Modals.formResult))];
      yield all(effects);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.sendForm));
    }
  }
  /**
   * Send contac us form
   */
  @Saga(sendForm.jobDetails)
  public *sendJobApply(
    payload: Payload<typeof sendForm.jobDetails>,
    { api }: Context
  ) {
    yield put(preloaderStart(Preloaders.sendForm));
    try {
      /**
       * Request
       */
      const response = yield call(api.form.sendJobApply, payload);
      /**
       * Effects
       */
      const effects = [put(showModal(Modals.formResult))];
      yield all(effects);
    } catch (error) {
      yield put(handleError(error.response.data.message));
    } finally {
      yield put(preloaderStop(Preloaders.sendForm));
    }
  }

  /**
   *
   */
  // @Saga()
  // public *(
  //   payload: Payload<typeof >,
  //   { api }: Context
  // ) {
  //   yield put(preloaderStart(Preloaders.sendForm));
  //   try {
  //   } catch (error) {
  //     yield put(handleError(error.response.data.message));
  //   } finally {
  //     yield put(preloaderStop(Preloaders.sendForm));
  //   }
  // }
}

export { FormSaga };
