import { History } from 'history';
import { HttpService, ApiService } from '@app/services';

/**
 * Sagas context
 */
class Context {
  /**
   * History
   */
  public history: History;
  /**
   * HTTP Service
   */
  public http: HttpService;
  /**
   * Api service
   */
  public api: ApiService;
}

export { Context };
