import { HttpService } from './http.service';
import { GeneralService } from '../general.service';
import { AuthService } from '../auth.service';
import { ProfileService } from '../profile.service';
import { SubscriptionService } from '../subscription.service';
import { LibraryService } from '../library.service';
import { ProgramsService } from '../programs.service';
import { CheckoutService } from '../checkout.service';
import { MarketplaceService } from '../marketplace.service';

class ApiService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Services
   */
  public general = new GeneralService(this.http);
  public auth = new AuthService(this.http);

  // Account services
  public profile = new ProfileService(this.http);
  public subscription = new SubscriptionService(this.http);
  public checkout = new CheckoutService(this.http);
  public library = new LibraryService(this.http);
  public programs = new ProgramsService(this.http);
  public marketplace = new MarketplaceService(this.http);
}

export { ApiService };
