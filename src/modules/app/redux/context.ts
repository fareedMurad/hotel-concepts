import { History } from 'history';
import { HttpService, ApiService } from '@app/services';
import { FastSpringService } from '@app/services/config/fastspring.service';

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
  /**
   * FastSpring service
   */
  public fs: FastSpringService;
}

export { Context };
