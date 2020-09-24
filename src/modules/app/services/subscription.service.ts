import { HttpService } from './config';

class SubscriptionService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Example
   */
  public exampleRequest = (data: string) =>
    this.http.request({
      method: 'POST',
      url: '/expample',
      data
    });
}

export { SubscriptionService };
