module.exports = {
    rules: {
        // Error if engines is missing.
        'require-engines': 'error',

        // Error if the value in engines is not equal to one of the values in the array of valid values or if the version range is invalid.
        'valid-values-engines': ['error', [{ node: '18', pnpm: '7' }]],
    },
};
