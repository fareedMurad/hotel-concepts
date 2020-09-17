import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { enviroment } from 'src/environment';

class HttpService {
  /**
   * Init
   */
  public constructor(private handler?: (error: AxiosError) => any) {}

  /**
   * Send api request
   */
  public request({ headers = {}, ...config }: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          baseURL: enviroment.apiUrl,
          method: 'get',
          withCredentials: true,
          headers: {
            crossDomain: true,
            ...headers
          },
          ...config
        });

        return resolve(response.data);
      } catch (error) {
        if (!this.handler) return reject(error);

        const handled = await this.handler(error);

        if (handled) return;

        reject(error);
      }
    });
  }
}

export { HttpService };
