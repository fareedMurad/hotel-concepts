import { HttpService } from './config';

class MarketplaceService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Fetch marketplace list
   */
  public fetchMarketplaceList = (data: {
    skip: number;
    limit: number;
    category: string;
    locale: string;
  }) => {
    const { skip, limit, category, locale } = data;

    return this.http.request({
      url: `/contentful/products/list?skip=${skip}&limit=${limit}&category=${category}&locale=${locale}`
    });
  };

  /**
   * Fetch marketplace categories
   */
  public fetchMarketplace = (locale: string) =>
    this.http.request({
      url: `/contentful/products/categories?locale=${locale}`
    });

  /**
   * Fetch marketplace products by category id
   */
  public fetchMarketplaceByCategory = (id: string, locale: string) =>
    this.http.request({
      url: `/contentful/products/categories/${id}?locale=${locale}`
    });

  /**
   * Fetch marketplace product
   */
  public fetchMarketplaceProduct = data => {
    const { id, type, locale } = data;

    return this.http.request({
      url: `/contentful/${id}?type=${type}&locale=${locale}`
    });
  };

  /**
   * Fetch any products by id
   */
  public fetchAnyProductsListByIds = (data: {
    ids: string[];
    locale: string;
  }) => {
    const { ids, locale } = data;
    return this.http.request({
      url: `/contentful/list?ids=${ids.join(',')}&locale=${locale}`
    });
  };
}

export { MarketplaceService };
