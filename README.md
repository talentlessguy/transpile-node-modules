# transpile-node-modules

CLI to transpile individual ESM packages to CommonJS with [esbuild](https://esbuild.github.io).

## Install

```sh
pnpm i -g transpile-node-modules
```

## Usage

```sh
transpile-node-modules <pkg> [target]
```

- `pkg` - package to transpile
- `target` - optional target environment (default: **es2018**)
