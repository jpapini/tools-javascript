# Tools - npm-package-json-lint monorepo configuration <!-- omit in toc -->

Shared npm-package-json-lint configuration for JavaScript monorepo projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [How to use](#how-to-use)
-   [Author](#author)

## How to install

Run the following command to install the required dependencies:

```shell
$ pnpm add -D @jpapini/npm-package-json-lint-config-monorepo npm-package-json-lint
```

Add the following fields to your `package.json`:

```json
{
    "scripts": {
        "lint:pkglint": "npmPkgJsonLint ."
    },
    "npmpackagejsonlint": {
        "extends": "@jpapini/npm-package-json-lint-config-monorepo"
    }
}
```

## How to use

Run `pnpm lint:pkglint` for linting `package.json` files.

## Author

-   Julien Papini <julien.papini@gmail.com>
