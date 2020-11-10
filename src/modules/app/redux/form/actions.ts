import {
  AboutUsFormValues,
  ConsultRequestFormValues,
  ContactUsFormValues,
  ContributorsApplyValues,
  FAQFormValues,
  FormModel,
  JobDetailsFormValues,
  ProgramCatalogueFormValues
} from './../../models/form';
import { make } from 'redux-chill';

/*
 * Send form
 */

const sendForm = make('[Form] send form')
  .stage(payload => payload)
  .stage('contactUs', (payload: ContactUsFormValues) => payload)
  .stage('jobDetails', (payload: JobDetailsFormValues) => payload)
  .stage('programCatalogue', (payload: ProgramCatalogueFormValues) => payload)
  .stage('aboutUs', (payload: AboutUsFormValues) => payload)
  .stage('contributorsApply', (payload: ContributorsApplyValues) => payload)
  .stage('faq', (payload: FAQFormValues) => payload)
  .stage('consultRequest', (payload: ConsultRequestFormValues) => payload)
  .stage(
    'subscription',
    (payload: { subject: string; data: { email: string } }) => payload
  )
  .stage('success');

export { sendForm };
