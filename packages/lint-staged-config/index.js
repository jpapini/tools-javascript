module.exports = {
    '**/*.{js,ts}': (filenames) => {
        const files = filenames.join(' ');
        return [
            `prettier --write ${files}`,
            `eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix ${files}`,
        ];
    },
    '**/*.{json,yml,yaml,md,gql}': (filenames) => {
        const files = filenames.join(' ');
        return `prettier --write ${files}`;
    },
    '**/package.json': (filenames) => {
        const files = filenames.join(' ');
        return [`sort-package-json ${files}`, `npmPkgJsonLint ${files}`];
    },
};
