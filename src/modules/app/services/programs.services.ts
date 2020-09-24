import { HttpService } from './config';

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
}

export { ProgramsService };

//add to congig services
