module.exports = {
    extends: [require.resolve('./monorepo-private.js')],
    rules: {
        // Error if the value in license is not equal to one of the values in the array of valid values.
        'valid-values-license': ['error', ['MIT']],
    },
    overrides: [
        {
            patterns: ['packages/**/package.json'],
            rules: {
                // Error if the value in publishConfig is not equal to one of the values in the array of valid values.
                'valid-values-publishConfig': ['error', [{ access: 'public' }]],
            },
        },
    ],
};
