import type { Options } from '@vitejs/plugin-react-refresh';
import reactRefresh from '@vitejs/plugin-react-refresh';
import type { Plugin } from 'vite';
import { reactDevtoolsPlugin } from './devtools';

type ReactPresetPlugin = {
  /** Disabled React devtools in production */
  removeDevtoolsInProd?: boolean;

  /** Inject `React` into every file to not declare `import React from 'react';` everywhere */
  injectReact?: boolean;

  /** Pass options as-it-is to @vitejs/plugin-react-refresh */
  reactRefreshOptions?: Options;
};

export default function reactPlugin({
  removeDevtoolsInProd = false,
  injectReact = true,
  reactRefreshOptions,
}: ReactPresetPlugin = {}): Plugin[] {
  return [
    {
      name: 'react:config',
      config() {
        return {
          esbuild: {
            ...(injectReact ? { jsxInject: `import React from 'react'` } : {}),
          },
        };
      },
    },
    reactRefresh(reactRefreshOptions),
    reactDevtoolsPlugin({ removeInProd: removeDevtoolsInProd }),
  ];
}
