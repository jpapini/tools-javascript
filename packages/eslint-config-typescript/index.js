require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    overrides: [
        {
            files: ['**/*.ts?(x)'],
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
    ],
};
