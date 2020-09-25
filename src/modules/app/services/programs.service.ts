import { HttpService } from './config';

class ProgramsService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Example
   */
  public exampleRequest = (data: string) =>
    this.http.request({
      method: 'POST',
      url: '/expample',
      data
    });
}

export { ProgramsService };
