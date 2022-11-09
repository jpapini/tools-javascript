# Tools - ESLint React.js configuration <!-- omit in toc -->

Shared ESLint React.js configuration for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [Author](#author)

## Requirements

This package requires the following ESLint base configuration: `@jpapini/eslint-config`.

## How to install

Run the following command to install the required dependencies:

```shell
$ <yarn|npm|pnpm> add -D @jpapini/eslint-config-react
$ <yarn|npm|pnpm> add react react-dom
```

Add the following fields to your `package.json`:

```json
{
    "eslintConfig": {
        "extends": ["@jpapini/eslint-config", "@jpapini/eslint-config-react"]
    }
}
```

Don't forget to create a `.eslintignore` file to ignore unnecessary files.

## Author

-   Julien Papini <julien.papini@gmail.com>
