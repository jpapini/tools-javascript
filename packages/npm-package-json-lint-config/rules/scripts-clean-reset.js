module.exports = {
    rules: {
        // Error if scripts is missing.
        'require-scripts': 'error',

        // Error if the package.json scripts object does not contain all preferred scripts.
        'prefer-scripts': ['error', ['clean', 'reset']],
    },
};
