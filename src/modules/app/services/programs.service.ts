import { ContentType } from '@account/pages/library/models';
import { HttpService } from './config';

class ProgramsService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Fetch purchased programs
   */
  public fetchProgramsPurchased = (locale: string) =>
    this.http.request({
      url: `/library?locale=${locale}&type=${ContentType.onlineCourse}`
    });

  /**
   * Fetch programs wishlist
   */
  public fetchProgramsWishlist = (locale: string) =>
    this.http.request({
      url: `/wishlist?locale=${locale}&type=${ContentType.onlineCourse}`
    });

  /**
   * Add program to wishlist
   */
  public addProgramToWishlist = (id: string, type: ContentType) =>
    this.http.request({
      method: 'POST',
      url: '/wishlist/add',
      data: {
        id,
        type
      }
    });

  /**
   * Remove program from wishlist
   */
  public removeProgramFromWishlist = (id: string, type: ContentType) =>
    this.http.request({
      method: 'DELETE',
      url: '/wishlist/delete',
      data: {
        id,
        type
      }
    });
}

export { ProgramsService };
