<div align="center">

# transpile-node-modules 🧪

![Vulnerabilities][vulns-badge-url] [![Version][v-badge-url]][npm-url] [![Downloads][dl-badge-url]][npm-url] [![GitHub Workflow Status][gh-actions-img]][github-actions]

</div>

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

[vulns-badge-url]: https://img.shields.io/snyk/vulnerabilities/npm/transpile-node-modules.svg?style=for-the-badge&label=vulns
[v-badge-url]: https://img.shields.io/npm/v/transpile-node-modules.svg?style=for-the-badge&label=&logo=npm
[npm-url]: https://www.npmjs.com/package/transpile-node-modules
[dl-badge-url]: https://img.shields.io/npm/dt/transpile-node-modules?style=for-the-badge
[github-actions]: https://github.com/talentlessguy/transpile-node-modules/actions
[gh-actions-img]: https://img.shields.io/github/workflow/status/talentlessguy/transpile-node-modules/CI?style=for-the-badge&label=&logo=github
