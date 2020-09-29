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
      url: `/library?locale=${locale}&type=${ContentType}`
    });

  /**
   * Fetch library wishlist
   */
  public fetchLibraryWishlist = (locale: string) =>
    this.http.request({
      url: `/wishlist?locale=${locale}&type=${ContentType}`
    });

  /**
   * Add book to wishlist
   */
  public addBookToWishlist = (id: string, type: ContentType) =>
    this.http.request({
      method: 'POST',
      url: '/wishlist/add',
      data: {
        id,
        type
      }
    });

  /**
   * Remove book from wishlist
   */
  public removeBookFromWishlist = (id: string, type: ContentType) =>
    this.http.request({
      method: 'DELETE',
      url: '/wishlist/delete',
      data: {
        id,
        type
      }
    });
}

export { LibraryService };
