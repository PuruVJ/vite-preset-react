// @ts-check
import reactRefresh from "@vitejs/plugin-react-refresh";
import { Plugin } from "vite";

export default function preactPlugin(): Plugin[] {
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
  ];
}
