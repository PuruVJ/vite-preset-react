import type { Plugin } from 'vite';

export interface ReactDevtoolsPluginOptions {
  removeInProd?: boolean;
}

export function reactDevtoolsPlugin({
  removeInProd = false,
}: ReactDevtoolsPluginOptions = {}): Plugin {
  const plugin: Plugin = {
    name: 'react:devtools',

    // Ensure that we resolve before everything else
    enforce: 'pre',

    // Run only on build
    apply: 'build',

    transformIndexHtml(code) {
      if (removeInProd) {
        return {
          html: code,
          tags: [
            {
              injectTo: 'body',
              tag: `script`,
              children: `if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') { window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};};`,
            },
          ],
        };
      }
      return code;
    },
  };

  return plugin;
}
