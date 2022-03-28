const { hasAnyDep } = require('@jpapini/tools-utils');

const hasPrettier = hasAnyDep('prettier');
const hasEslint = hasAnyDep('eslint');
const hasSortPackageJson = hasAnyDep('sort-package-json');
const hasNpmPkgJsonLint = hasAnyDep('npm-package-json-lint');

module.exports = {
    '**/*.{js,ts}': (filenames) => {
        const files = filenames.join(' ');
        return [
            ...(hasPrettier ? [`prettier --write ${files}`] : []),
            ...(hasEslint
                ? [
                      `eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix ${files}`,
                  ]
                : []),
        ];
    },
    '**/*.{json,yml,yaml,md,gql}': (filenames) => {
        const files = filenames.join(' ');
        return [...(hasPrettier ? [`prettier --write ${files}`] : [])];
    },
    '**/package.json': (filenames) => {
        const files = filenames.join(' ');
        return [
            ...(hasSortPackageJson ? [`sort-package-json ${files}`] : []),
            ...(hasNpmPkgJsonLint ? [`npmPkgJsonLint ${files}`] : []),
        ];
    },
};
