# Tools - ESLint configuration <!-- omit in toc -->

Shared ESLint configuration for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [How to use](#how-to-use)
-   [Author](#author)

## How to install

Run the following command to install the required dependencies:

```shell
$ pnpm add -D @jpapini/eslint-config eslint prettier
```

Add the following fields to your `package.json`:

```json
{
    "scripts": {
        "lint:eslint": "eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache .",
        "format:eslint": "eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix ."
    },
    "eslintConfig": {
        "extends": "@jpapini/eslint-config"
    }
}
```

Don't forget to create a `.eslintignore` file to ignore unnecessary files.

## How to use

Run `pnpm lint:eslint` for linting files.

Run `pnpm format:eslint` for formatting files.

## Author

-   Julien Papini <julien.papini@gmail.com>
