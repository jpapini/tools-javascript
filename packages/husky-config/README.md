# Tools - Husky configuration <!-- omit in toc -->

Shared Husky configuration for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [Author](#author)

## How to install

Run the following command to install the required dependencies:

```shell
$ pnpm add -D \
    @jpapini/husky-config \
    @jpapini/commitlint-config \
    @jpapini/lint-staged-config \
    husky \
    lint-staged \
    @commitlint/cli
```

Add the following fields to your `package.json`:

```json
{
    "scripts": {
        "prepare": "./node_modules/@jpapini/husky-config/install.sh"
    }
}
```

## Author

-   Julien Papini <julien.papini@gmail.com>
