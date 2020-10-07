import { OrderSuccess, StoreBuilder } from '@app/models/fastspring';
import { enviroment } from '@env';
import { HttpService } from '.';
import { CheckoutService } from '../checkout.service';

const DEFAULT_SDK_URL =
  'https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.7.6/fastspring-builder.min.js';

const createScript = (
  src: string,
  attributes: any = null,
  callback: () => void
) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;

  if (attributes) {
    const attributeKeys = Object.keys(attributes);
    attributeKeys.forEach(key => {
      const value = attributes[key];
      if (value) {
        script.setAttribute(key, value);
      }
    });
  }
  script.addEventListener('load', () => {
    callback();
  });
  document.body.appendChild(script);
};

class FastSpringService {
  constructor(storefront, private http: HttpService) {
    createScript(
      DEFAULT_SDK_URL,
      {
        'data-access-key': enviroment.fsAccessKey,
        'data-popup-closed': 'onFSPopupClosed',
        'data-storefront': storefront,
        id: 'fsc-api',
        type: 'text/javascript'
      },
      () => {
        if (window.fastspring) {
          this.store = window.fastspring;
          window.onFSPopupClosed = this.onPopUpClosed;
        }
      }
    );
  }

  private checkout = new CheckoutService(this.http);

  public store: StoreBuilder;

  private onPopUpClosed = data => {
    console.log('onPopUpClosed', data);
    if (data as OrderSuccess) {
      this.checkout.acknowledgeSessionSuccess(data);
    }
  };
}

export { FastSpringService };
