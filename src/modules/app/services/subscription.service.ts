import { HttpService } from './config';

class SubscriptionService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Fetch subscription
   */
  public fetchSubscription = () =>
    this.http.request({
      url: '/example'
    });

  /**
   * Buy subscription
   */
  public buySubscription = data =>
    this.http.request({
      method: 'POST',
      url: '/example',
      data
    });
}

export { SubscriptionService };
