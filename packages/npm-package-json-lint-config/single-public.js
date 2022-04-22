module.exports = {
    extends: [require.resolve('./single-private.js')],
    rules: {
        // Error if the value in license is not equal to one of the values in the array of valid values.
        'valid-values-license': ['error', ['MIT']],
    },
};
