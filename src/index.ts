import type { Options } from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import { reactDevtoolsPlugin } from './devtools';

type ReactPresetPlugin = {
  /** Disabled React devtools in production */
  removeDevtoolsInProd?: boolean;

  /** Inject `React` into every file to not declare `import React from 'react';` everywhere */
  injectReact?: boolean;

  /** Pass options as-it-is to @vitejs/plugin-react */
  reactPluginOptions?: Options;
};

export default function reactPlugin({
  removeDevtoolsInProd = false,
  injectReact = true,
  reactPluginOptions: reactRefreshOptions,
}: ReactPresetPlugin = {}): Plugin[] {
  return [
    // @ts-ignore
    react({ jsxRuntime: injectReact ? 'automatic' : 'classic', ...reactRefreshOptions }),
    reactDevtoolsPlugin({ removeInProd: removeDevtoolsInProd }),
  ];
}
