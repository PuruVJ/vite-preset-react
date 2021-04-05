# vite-preset-react

An all in one preset for writing React apps with the [vite](https://github.com/vitejs/vite) bundler.

Features:

- Sets up Hot Module Replacement via [@vitejs/plugin-react-refresh](https://www.npmjs.com/package/@vitejs/plugin-react-refresh)
- Automatically injects `React` into your components, so you don't have to `import React from 'react'` in every file.

## Installation

First install the preset package from npm:

```bash
npm install --save-dev vite-preset-react
# or
yarn add -D vite-preset-react
```

Enhance your vite config with the Preact preset plugin in your `vite.config.ts` or `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "vite-preset-react";

export default defineConfig({
  plugins: [react()],
});
```

## Options

No options currently, though conditional removal of devtools in production is in the roadmap.

## Errors

## 1. Getting a blank page with error: `Uncaught SyntaxError: Identifier 'React' has already been declared`

Its because `React` has already been imported behind the scenes into your component. Remove any `import React from 'react'` from your components.

## Not importing React doesn't allow JSX in TSX files

If you're getting red squiggles under your JSX, follow this:

1. Go to tsconfig.json
2. Set the `jsx` option to `preserve`.

There, that should fix it.

## License

MIT, see [the license file](./LICENSE).
