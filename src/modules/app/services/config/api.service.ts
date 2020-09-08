import { HttpService } from './http.service';
import { GeneralService } from '../general.service';
import { AuthService } from '../auth.service';
import { AccountService } from '../account.service';

class ApiService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Services
   */
  public general = new GeneralService(this.http);
  public account = new AccountService(this.http);
  public auth = new AuthService(this.http);
}

export { ApiService };
