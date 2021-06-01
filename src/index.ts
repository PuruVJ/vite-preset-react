// @ts-check
import reactRefresh from "@vitejs/plugin-react-refresh";
import { Plugin } from "vite";
import { reactDevtoolsPlugin } from "./devtools";

type ReactPresetPlugin = {
  /** Disabled React devtools in production */
  removeDevtoolsInProd?: boolean;

  /** Inject `React` into every file to not declare `import React from 'react';` everywhere */
  injectReact?: boolean;
};

export default function reactPlugin({
  removeDevtoolsInProd = false,
  injectReact = true,
}: ReactPresetPlugin = {}): Plugin[] {
  return [
    {
      name: "react:config",
      config() {
        return {
          esbuild: {
            ...(injectReact ? { jsxInject: `import React from 'react'` } : {}),
          },
        };
      },
    },
    reactRefresh(),
    reactDevtoolsPlugin({ removeInProd: removeDevtoolsInProd }),
  ];
}
