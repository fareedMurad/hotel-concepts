import { CreateSession, OrderSuccess } from '@app/models/fastspring';
import { InvoiceValues } from '@pages/cart/components/modal-invoice-request/models/invoice';
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

  /**
   * Acknowledge that session is successfull
   */
  public acknowledgeSessionSuccess = (data: OrderSuccess) =>
    this.http.request({
      method: 'POST',
      url: '/fastspring/session/success',
      data
    });

  /*
   * Send invoice request
   */
  public sendInvoiceRequest = (data: InvoiceValues) =>
    this.http.request({
      method: 'POST',
      url: '/',
      data
    });
}

export { CheckoutService };
