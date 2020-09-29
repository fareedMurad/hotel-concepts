import { CreateSession } from '@app/models/fastspring';
import { HttpService } from './config';

class CheckoutService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Create session
   */
  public createSession = (data: CreateSession) =>
    this.http.request({
      method: 'POST',
      url: '/fastspring/session',
      data
    });
}

export { CheckoutService };
