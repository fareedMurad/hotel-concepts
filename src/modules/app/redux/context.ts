import { History } from 'history';
import {
  HttpService,
  ApiService,
  SocketService,
  FastSpringService
} from '@app/services';

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
  /**
   * Socket service
   */
  public socket: SocketService;
}

export { Context };
