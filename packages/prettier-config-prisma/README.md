# Tools - Prettier Prisma configuration <!-- omit in toc -->

Shared Prettier configuration with Prisma plugin for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [How to use](#how-to-use)
-   [Author](#author)

## How to install

Run the following command to install the required dependencies:

```shell
$ <yarn|npm|pnpm> add -D @jpapini/prettier-config-prisma prettier
```

Add the following fields to your `package.json`:

```json
{
    "scripts": {
        "lint:prettier": "prettier --check -u '**/*'",
        "format:prettier": "prettier --write -u '**/*'"
    },
    "prettier": "@jpapini/prettier-config-prisma"
}
```

Don't forget to create a `.prettierignore` file to ignore unnecessary files.

## How to use

Run `pnpm run lint:prettier` for linting files.

Run `pnpm run format:prettier` for formatting files.

## Author

-   Julien Papini <julien.papini@gmail.com>
