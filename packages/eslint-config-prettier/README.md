# Tools - ESLint Prettier configuration <!-- omit in toc -->

Shared ESLint Prettier configuration for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [Author](#author)

## How to install

Run the following command to install the required dependencies:

```shell
$ <yarn|npm|pnpm> add -D @jpapini/eslint-config-prettier prettier
```

Add the following fields to your `package.json`:

```json
{
    "eslintConfig": {
        "extends": [..., "@jpapini/eslint-config-prettier"]
    }
}
```

Don't forget to create a `.eslintignore` file to ignore unnecessary files.

## Author

-   Julien Papini <julien.papini@gmail.com>
