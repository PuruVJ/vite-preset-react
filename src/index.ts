// @ts-check
import reactRefresh from "@vitejs/plugin-react-refresh";
import { Plugin } from "vite";
import { reactDevtoolsPlugin } from "./devtools";

type ReactPresetPlugin = {
  removeDevtoolsInProd?: boolean;
};

export default function reactPlugin({
  removeDevtoolsInProd = false,
}: ReactPresetPlugin = {}): Plugin[] {
  return [
    {
      name: "react:config",
      config() {
        return {
          esbuild: {
            jsxInject: `import React from 'react'`,
          },
        };
      },
    },
    reactRefresh(),
    reactDevtoolsPlugin({ removeInProd: removeDevtoolsInProd }),
  ];
}
