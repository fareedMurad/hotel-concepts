import { History } from 'history';
import { Store } from 'redux';

declare global {
  interface Window {
    fastspring: any;
    onFSPopupClosed: any;
  }
}
/**
 * Props
 */
type AppProps = {
  store: Store;
  history: History;
};

export { AppProps };
