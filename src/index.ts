// @ts-check
import reactRefresh from "@vitejs/plugin-react-refresh";
import { Plugin } from "vite";
import { reactDevtoolsPlugin } from "./devtools";

type ReactPresetPlugin = {
  removeDevtoolsInProd?: boolean;
  enableTS?: boolean;
};

export default function reactPlugin({
  removeDevtoolsInProd = false,
  enableTS = false,
}: ReactPresetPlugin = {}): Plugin[] {
  let imports = "React"
  if(enableTS){
    imports = `${imports}, { ReactElement }`
  }
  return [
    {
      name: "react:config",
      config() {
        return {
          esbuild: {
            jsxInject: `import ${imports} from 'react'`,
          },
        };
      },
    },
    reactRefresh(),
    reactDevtoolsPlugin({ removeInProd: removeDevtoolsInProd }),
  ];
}
