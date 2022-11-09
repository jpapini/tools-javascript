require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    overrides: [
        {
            files: ['**/__tests__/**/*.+(js|ts)?(x)', '**/*.{spec,test}.+(js|ts)?(x)'],
            extends: [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'plugin:prettier/recommended',
            ],
        },
        {
            files: ['**/__tests__/**/*.ts?(x)', '**/*.{spec,test}.ts?(x)'],
            rules: {
                // Disabling this rule for using the rule from Jest.
                '@typescript-eslint/unbound-method': 'off',
                // Enforces unbound methods are called with their expected scope.
                'jest/unbound-method': 'error',
            },
        },
    ],
};
