import { FormModel } from './../models/form';
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
}

export { FormService };
