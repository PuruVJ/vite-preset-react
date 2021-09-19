# vite-preset-react

An all in one opinionated preset for writing React apps with the [vite](https://github.com/vitejs/vite) bundler.

Features:

- Sets up Hot Module Replacement via [@vitejs/plugin-react-refresh](https://www.npmjs.com/package/@vitejs/plugin-react-refresh)
- Automatically injects `React` into your components, so you don't have to `import React from 'react'` in every file.
- Remove devtools in production if needed

## Installation

First install the preset package from npm:

```bash
npm install --save-dev vite-preset-react
# or
yarn add -D vite-preset-react
```

Enhance your vite config with the React preset plugin in your `vite.config.ts` or `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "vite-preset-react";

export default defineConfig({
  plugins: [react()],
});
```

## Options

Options can be passed to our preset plugin via the first argument:

```ts
export default defineConfig({
  plugins: [react({ removeDevtoolsInProd: true, injectReact: true })],
});
```

### Available options

| Option                 | Type      | Default | Description                                                                                       |
| ---------------------- | --------- | ------- | ------------------------------------------------------------------------------------------------- |
| `removeDevtoolsInProd` | `boolean` | `false` | Removes React Devtools in production build                                                        |
| `injectReact`          | `boolean` | `true`  | Injects `import React from 'react'` in every JS file to avoid importing it in every file manually |
| `reactRefreshOptions` | `Options` | `undefined` | Options to pass to the underlying `@vitejs/plugin-react-refresh`. [See here](https://www.npmjs.com/package/@vitejs/plugin-react-refresh) |

## Using in official starter templates

If you are using the official `react` or `react-ts` template, and wanna switch to this one, follow this:

1. Remove `@vitejs/plugin-react-refresh` from `package.json`.

2. Install this preset:

```sh
npm install -D vite-preset-react
```

Or if you're a Yarn person

```sh
yarn add -D vite-preset-react
```

3. If you're using `react-ts` template, open `tsconfig.json`, and change `jsx` field to `preserve`.

There!! You're all set!

## Using with Preact

Theoretically, this package should work well with preact. However, it's highly recommended to use the official [@preactjs/preset-vite](https://www.npmjs.com/package/@preact/preset-vite).

## Errors

## Identifier 'React' has already been declared

This error occurs when manually import `React` in a file, with the config option `injectReact` set to `true`.

Solution would be to remove the import if it is the only file in the whole codebase importing `React`.
Or you can set `injectReact` option to `false`. This will suppress this error and allow you to import `React` in every file.

## Uncaught ReferenceError: React is not defined

This error arises when you have the option `injectReact` set to `false`, but you're not importing `React` in some of your files. Solution would be to set this option to `true`; Or put an `import React from 'react'` statement in every file containing JSX code.

## Not importing React doesn't allow JSX in TSX files

If you're getting red squiggles under your JSX, follow this:

1. Go to tsconfig.json
2. Set the `jsx` option to `preserve`.

There, that should fix it.

## License

MIT, see [the license file](./LICENSE).
