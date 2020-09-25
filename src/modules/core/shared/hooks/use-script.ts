import { useState, useEffect } from 'react';

const cachedScripts = [];

function useScript(src, attributes) {
  const [state, setState] = useState({
    error: false,
    loaded: false
  });

  useEffect(() => {
    /*
     If cachedScripts array already includes src that means another instance of this hook already loaded this script, so no need to load again.
     */
    if (cachedScripts.includes(src)) {
      setState({
        error: false,
        loaded: true
      });
      return;
    } else {
      cachedScripts.push(src);

      // Create script
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

      const onScriptLoad = () => {
        setState({
          error: false,
          loaded: true
        });
      };

      const onScriptError = () => {
        // Remove from cachedScripts we can try loading again
        const index = cachedScripts.indexOf(src);
        if (index >= 0) {
          cachedScripts.splice(index, 1);
        }
        script.remove();

        setState({
          error: true,
          loaded: true
        });
      };

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('error', onScriptError);

      // Add script to document body
      document.body.appendChild(script);

      return () => {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      };
    }
  }, [src]);

  return [state.loaded, state.error];
}

export { useScript };
