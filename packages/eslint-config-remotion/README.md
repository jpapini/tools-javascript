# Tools - ESLint Remotion configuration <!-- omit in toc -->

Shared ESLint Remotion configuration for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [Author](#author)

## Requirements

This package requires the following ESLint base configuration: `@jpapini/eslint-config`.

## How to install

Run the following command to install the required dependencies:

```shell
$ <yarn|npm|pnpm> add -D @jpapini/eslint-config-remotion
$ <yarn|npm|pnpm> add remotion
```

Add the following fields to your `package.json`:

```json
{
    "eslintConfig": {
        "extends": ["@jpapini/eslint-config", "@jpapini/eslint-config-remotion"]
    }
}
```

Don't forget to create a `.eslintignore` file to ignore unnecessary files.

## Author

-   Julien Papini <julien.papini@gmail.com>
