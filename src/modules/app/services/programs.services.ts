import { HttpService } from './config';
import { ContentType } from '@app/models/enum';

class ProgramsService {
  public constructor(private http: HttpService) {}

  /**
   * Get categories
   */
  public getCategories = locale => {
    return this.http.request({
      method: 'GET',
      url: `/contentful/categories?locale=${locale}`
    });
  };

  /*
   *  Get programs
   */
  public getPrograms = params => {
    const { skip, limit, category, locale, subfilters } = params;
    return this.http.request({
      method: 'GET',
      url: `/contentful/list?skip=${skip}&limit=${limit}&type=${ContentType.onlineCourse}&category=${category}&locale=${locale}&subfilters=${subfilters}`
    });
  };
}

export { ProgramsService };

//add to congig services
