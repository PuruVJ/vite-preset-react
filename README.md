# vite-preset-react

An all in one opinionated preset for writing React apps with the [vite](https://github.com/vitejs/vite) bundler.

Features:

- Sets up Hot Module Replacement & Automatic JSX runtime(No need for `import React from 'react'`) via [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react-refresh)
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
import { defineConfig } from 'vite';
import react from 'vite-preset-react';

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

| Option                 | Type      | Default     | Description                                                                                                              |
| ---------------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `removeDevtoolsInProd` | `boolean` | `false`     | Removes React Devtools in production build                                                                               |
| `injectReact`          | `boolean` | `true`      | Injects `import React from 'react'` in every JS file to avoid importing it in every file manually                        |
| `reactPluginOptions`   | `Options` | `undefined` | Options to pass to the underlying `@vitejs/plugin-react`. [See here](https://www.npmjs.com/package/@vitejs/plugin-react) |

## Using in official starter templates

If you are using the official `react` or `react-ts` template, and wanna switch to this one, follow this:

1. Remove `@vitejs/plugin-react` from `package.json`.

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

### Not importing React doesn't allow JSX in TSX files

If you're getting red squiggles under your JSX, follow this:

1. Go to tsconfig.json
2. Set the `jsx` option to `preserve`.

There, that should fix it.

## Differences from @vitejs/plugin-react

When would you want to use this plugin instead of the official `@vitejs/plugin-react`? Well, the answer is: **If you don't need control over whether React devtools are removed or not**

Yep, that's pretty much it. Earlier, when the official react plugin was `@vitejs/plugin-react-refresh`, this plugin would enable automatic JSX, so you wouldn't have import React in every file. Now with the new `@vitejs/plugin-react` providing the much better automatic JSX runtime, eliminating the need for `vite-preset-react` altogether, unless you need to remove react devtools.

## License

MIT, see [the license file](./LICENSE).
