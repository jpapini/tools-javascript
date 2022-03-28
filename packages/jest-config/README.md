# Tools - Jest configuration <!-- omit in toc -->

Shared Jest configuration for JavaScript projects.

## Table of contents <!-- omit in toc -->

-   [How to install](#how-to-install)
-   [How to use](#how-to-use)
    -   [Usage with JavaScript](#usage-with-javascript)
    -   [Usage with TypeScript](#usage-with-typescript)
-   [Author](#author)

## How to install

Run the following command to install the required dependencies:

```shell
$ <yarn|npm|pnpm> add -D @jpapini/jest-config jest
```

## How to use

Add the following content to your `package.json` file:

```json
{
    "scripts": {
        "test": "jest --color --passWithNoTests",
        "test:watch": "jest --watch --color --passWithNoTests",
        "test:cov": "jest --coverage --color --passWithNoTests"
    }
}
```

### Usage with JavaScript

Create a `jest.config.js` file with the following content:

```javascript
const baseConfig = require('@jpapini/jest-config');

module.exports = {
    ...baseConfig,
};
```

### Usage with TypeScript

Run the following command to install the required dependencies:

```shell
$ <yarn|npm|pnpm> add -D ts-jest
```

Create a `jest.config.js` file with the following content:

```javascript
const baseConfig = require('@jpapini/jest-config');
const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    ...baseConfig,
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
```

## Author

-   Julien Papini <julien.papini@gmail.com>
