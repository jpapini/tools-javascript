module.exports = {
    extends: [require.resolve('./single-private.js')],
    rules: {
        // Error if files is missing.
        'require-files': 'error',
        // Error if keywords is missing.
        'require-keywords': 'error',
        // Error if private is missing.
        'require-private': 'off',
        // Error if publishConfig is missing.
        'require-publishConfig': 'error',

        // Error if the value in private is not equal to one of the values in the array of valid values.
        'valid-values-private': ['error', [false]],
        // Error if the value in publishConfig is not equal to one of the values in the array of valid values.
        'valid-values-publishConfig': ['error', [{ access: 'restricted' }]],
    },
};
