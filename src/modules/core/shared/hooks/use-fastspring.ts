import { useScript } from './use-script';
// import { enviroment } from '@env';
import { enviroment } from '../../../../environment';
import { StoreBuilder } from '@app/models/fastspring';

const DEFAULT_SDK_URL =
  'https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.8.3/fastspring-builder.min.js';

function useFastspring({
  onPopupClose,
  accessKey = enviroment.fsAccessKey,
  sdkUrl = DEFAULT_SDK_URL
}) {
  const [loaded] = useScript(sdkUrl, {
    'data-access-key': accessKey,
    // 'data-popup-closed': 'onFSPopupClosed',
    'data-storefront': enviroment.fsStoreFront,
    id: 'fsc-api',
    type: 'text/javascript'
  });

  const fastspring: StoreBuilder = window.fastspring;

  if (onPopupClose) {
    window.onFSPopupClosed = onPopupClose;
  }

  return { loaded, fastspring };
}

export { useFastspring };
