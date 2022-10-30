# Tools - TypeScript configuration <!-- omit in toc -->

Shared TypeScript configuration for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [How to use](#how-to-use)
    -   [Usage with Node.js 18](#usage-with-nodejs-18)
    -   [Usage with Nest.js](#usage-with-nestjs)
-   [Author](#author)

## How to install

Run the following command to install the required dependencies:

```shell
$ <yarn|npm|pnpm> add -D @jpapini/typescript-config typescript
```

## How to use

### Usage with Node.js 18

Create a `tsconfig.json` file with the following content:

```json
{
    "extends": "@jpapini/typescript-config/tsconfig.node.json"
}
```

### Usage with Nest.js

Create a `tsconfig.json` file with the following content:

```json
{
    "extends": "@jpapini/typescript-config/tsconfig.nest.json"
}
```

## Author

-   Julien Papini <julien.papini@gmail.com>
