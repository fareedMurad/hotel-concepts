import { make } from 'redux-chill';

/**
 * Startup application
 */
const startup = make('[general] startup').stage('success');

/**
 * Handle error
 */
const handleError = make('[general] handle error').stage(
  (message: string | string[]) => message
);

/**
 * Connect socket
 */
const connectSocket = make('[general] connect socket');

export { startup, handleError, connectSocket };
