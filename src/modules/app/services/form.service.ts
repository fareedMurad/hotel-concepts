import {
  ConsultRequestFormValues,
  ContactUsFormValues,
  ContributorsApplyValues,
  FAQFormValues,
  FormModel,
  JobDetailsFormValues
} from './../models/form';
import { HttpService } from './config';

class FormService {
  public constructor(private http: HttpService) {}

  /*
   * Send form
   */
  public sendForm = (data: FormModel) =>
    this.http.request({
      method: 'POST',
      url: '/submit-form',
      data: data
    });
  /**
   * Send consult request
   */
  public sendFormConsultRequest = (data: ConsultRequestFormValues) =>
    this.http.request({
      method: 'POST',
      url: '/consult',
      data: data
    });
  /**
   * Send contributors apply
   */
  public sendContributorsApply = (data: ContributorsApplyValues) =>
    this.http.request({
      method: 'POST',
      url: '/contribute',
      data: data
    });
  /**
   * Send contact us
   */
  public sendContactUs = (data: ContactUsFormValues) =>
    this.http.request({
      method: 'POST',
      url: '/question',
      data: data
    });
  /**
   * Send faq
   */
  public sendFaq = (data: FAQFormValues) =>
    this.http.request({
      method: 'POST',
      url: '/contact',
      data: data
    });
  /**
   * Send faq
   */

  public sendJobApply = (data: JobDetailsFormValues) => {
    const { cv, cover } = data;
    const bodyData = new FormData();
    for (const key in data) {
      bodyData.append(String(key), String(data[key]));
    }
    bodyData.delete('cv');
    bodyData.delete('cover');
    bodyData.append('cv', cv);
    bodyData.append('cover', cover);

    return this.http.request({
      method: 'POST',
      url: '/apply',
      data: bodyData,
      headers: {
        'Content-Type': 'multipart/form-data; boundary=xxx'
      }
    });
  };
}

export { FormService };
