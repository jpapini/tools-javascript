require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    extends: ['eslint:recommended', require.resolve('./import.js'), 'plugin:prettier/recommended'],
    env: {
        // Node.js global variables and Node.js scoping.
        node: true,
        // Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
        es2021: true,
    },
};
