module.exports = {
    extends: [
        require.resolve('./rules/format.js'),
        require.resolve('./rules/engines-node-16-pnpm-6.js'),
        require.resolve('./rules/scripts-clean-reset.js'),
        require.resolve('./rules/author-jpapini.js'),
        require.resolve('./rules/scope-jpapini.js'),
    ],
    rules: {
        // Error if private is missing.
        'require-private': 'error',

        // Error if the value in license is not equal to one of the values in the array of valid values.
        'valid-values-license': ['error', ['UNLICENSED']],
        // Error if the value in private is not equal to one of the values in the array of valid values.
        'valid-values-private': ['error', [true]],
    },
    overrides: [
        {
            patterns: ['*/**/package.json'],
            rules: {
                // Error if author is missing.
                'require-author': 'error',
                // Error if bugs is missing.
                'require-bugs': 'error',
                // Error if description is missing.
                'require-description': 'error',
                // Error if homepage is missing.
                'require-homepage': 'error',
                // Error if license field is missing.
                'require-license': 'error',
                // Error if name is missing.
                'require-name': 'error',
                // Error if repository.directory is missing.
                'require-repository-directory': 'error',
                // Error if version is missing.
                'require-version': 'error',
            },
        },
        {
            patterns: ['packages/**/package.json'],
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
        },
    ],
};
