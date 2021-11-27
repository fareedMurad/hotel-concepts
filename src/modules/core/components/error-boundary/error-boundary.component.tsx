import * as React from 'react';
import * as styles from './error-boundary.scss';
import { useHistory } from 'react-router';
/**
 * Renders ErrorBoundary
 */
class ErrorBoundary extends React.Component<
  { history },
  { errorInfo: any; error: any }
> {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // componentDidCatch(error, errorInfo) {
  //   // Catch errors in any components below and re-render with error message
  //   this.setState({
  //     error: error,
  //     errorInfo: errorInfo
  //   });
  //   // You can also log error messages to an error reporting service here
  // }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className={styles.errorBoundary}>
          <div className={styles.circle}>
            <div className={styles.circleContent}>!</div>
          </div>
          <div className={styles.caption}>Oops..!</div>
          <div className={styles.description}>Something went wrong...</div>
          <div className={styles.tip}>
            Please try again or click on the button to go back.
          </div>
          <a href='/' className={styles.button}>
            Home
          </a>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export { ErrorBoundary };
