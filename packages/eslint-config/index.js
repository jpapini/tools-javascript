require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['import', 'simple-import-sort'],
    env: {
        // Node.js global variables and Node.js scoping.
        node: true,
        // Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
        es2021: true,
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
                    ['^@nestjs', '^@?\\w'],
                    // Internal packages.
                    ['^(@jpapini)(/.*|$)'],
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
    overrides: [
        {
            files: ['**/*.ts'],
            extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
            parserOptions: {
                // In a monorepo project, use deepest tsconfig.json first.
                project: ['*/**/tsconfig.json', '**/tsconfig.json'],
            },
            rules: {
                // Standardize the use of type imports style.
                '@typescript-eslint/consistent-type-imports': 'error',
                // Standardize the use of type exports style.
                '@typescript-eslint/consistent-type-exports': 'error',
                // Allow the declaration of empty interfaces.
                '@typescript-eslint/no-empty-interface': 'off',
                // Only allow unused variables for rest siblings.
                '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
                // Allow non-null assertions using the ! postfix operator.
                '@typescript-eslint/no-non-null-assertion': 'off',
            },
        },
        {
            files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
            extends: [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'plugin:prettier/recommended',
            ],
            env: {
                jest: true,
            },
        },
        {
            files: ['**/__tests__/**/*.ts', '**/*.{spec,test}.ts'],
            rules: {
                // Disabling this rule for using the rule from Jest.
                '@typescript-eslint/unbound-method': 'off',
                // Enforces unbound methods are called with their expected scope.
                'jest/unbound-method': 'error',
            },
        },
    ],
};
