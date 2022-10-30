require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    extends: ['eslint:recommended', require.resolve('./import.js'), 'plugin:prettier/recommended'],
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        // Node.js global variables and Node.js scoping.
        node: true,
        // Adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.
        es2022: true,
    },
};
