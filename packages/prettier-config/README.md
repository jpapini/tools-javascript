# Tools - Prettier configuration <!-- omit in toc -->

Shared Prettier configuration for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [How to use](#how-to-use)
-   [Author](#author)

## How to install

Run the following command to install the required dependencies:

```shell
$ pnpm add -D @jpapini/prettier-config prettier
```

Add the following fields to your `package.json`:

```json
{
    "scripts": {
        "lint:prettier": "prettier --check .",
        "format:prettier": "prettier --write ."
    },
    "prettier": "@jpapini/prettier-config"
}
```

Don't forget to create a `.prettierignore` file to ignore unnecessary files.

## How to use

Run `pnpm lint:prettier` for linting files.

Run `pnpm format:prettier` for formatting files.

## Author

-   Julien Papini <julien.papini@gmail.com>
