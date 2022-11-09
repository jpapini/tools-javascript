require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    extends: ['eslint:recommended'],
    plugins: ['import', 'simple-import-sort'],
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        // Node.js global variables and Node.js scoping.
        node: true,
        // Adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.
        es2022: true,
    },
    rules: {
        // Reports any imports that come after non-import statements.
        'import/first': 'error',
        // Enforces having one or more empty lines after the last top-level import statement or require call.
        'import/newline-after-import': 'error',
        // Reports if a resolved path is imported more than once.
        'import/no-duplicates': 'error',

        // Sort and group exports.
        'simple-import-sort/exports': 'error',
        // Sort and group imports.
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Side effect imports.
                    ['^\\u0000'],
                    // Node.js builtins.
                    [`^(${require('module').builtinModules.join('|')})(/|$)`],
                    // Packages.
                    ['^@nestjs', 'react', '^@?\\w'],
                    // Internal packages.
                    ['^@jpapini(/.*|$)'],
                    // Internal modules.
                    ['^~/[^/]+(/.*|$)'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ],
            },
        ],
    },
};
