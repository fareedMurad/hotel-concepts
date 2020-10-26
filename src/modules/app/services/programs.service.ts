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

  /**
   * Get categories
   */
  public getCategories = locale =>
    this.http.request({
      method: 'GET',
      url: `/contentful/courses/categories?locale=${locale}`
    });

  /**
   *  Get single category
   */
  public getSingleCategory = (id, locale) =>
    this.http.request({
      method: 'GET',
      url: `/contentful/courses/categories/${id}?locale=${locale}`
    });

  /*
   *  Get programs
   */
  public getPrograms = data => {
    const { skip, limit, category, locale, subfilters } = data;

    return this.http.request({
      url: `/contentful/courses/list?skip=${skip}&limit=${limit}&type=${ContentType.onlineCourse}&category=${category}&locale=${locale}&subfilters=${subfilters}`
    });
  };
  /*
   * Get single program
   */
  public getSingleProgram = params => {
    const { id, locale } = params;
    return this.http.request({
      method: 'GET',
      url: `/contentful/${id}?type=${ContentType.onlineCourse}&locale=${locale}`
    });
  };
}

export { ProgramsService };
