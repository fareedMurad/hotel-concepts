import { HttpService } from './config';

class FormService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  public sendForm = data =>
    this.http.request({
      method: 'POST',
      url: '/send',
      data: data
    });
}

export { FormService };
