import { ContentType } from '@account/pages/library/models';
import { HttpService } from './config';

class LibraryService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Fetch library purchased
   */
  public fetchLibraryPurchased = (locale: string) =>
    this.http.request({
      url: `/library?locale=${locale}&type=${ContentType.product}`
    });

  /**
   * Fetch library wishlist
   */
  public fetchLibraryWhishlist = (locale: string) =>
    this.http.request({
      url: `/wishlist?locale=${locale}&type=${ContentType.product}`
    });
}

export { LibraryService };
