# Tools - TypeScript configuration <!-- omit in toc -->

Shared TypeScript configuration for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [How to use](#how-to-use)
-   [Author](#author)

## How to install

Run the following command to install the required dependencies:

```shell
$ <yarn|npm|pnpm> add -D @jpapini/typescript-config typescript
```

## How to use

Create a `tsconfig.json` file with the following content:

```json
{
    "extends": "@jpapini/typescript-config/tsconfig.node.json"
}
```

## Author

-   Julien Papini <julien.papini@gmail.com>
