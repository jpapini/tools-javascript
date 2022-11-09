require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['react', 'jsx-a11y', '10x'],
    env: {
        browser: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-child-element-spacing': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/jsx-tag-spacing': 'error',
        'react/no-unknown-property': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/boolean-prop-naming': ['error', { validateNested: true }],
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandLast: true,
                multiline: 'last',
                ignoreCase: false,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        '10x/auto-import': [
            'error',
            {
                imports: {
                    useRef: "import { useRef } from 'react';",
                    useEffect: "import { useEffect } from 'react';",
                    useState: "import { useState } from 'react';",
                    useCallback: "import { useCallback } from 'react';",
                    useMemo: "import { useMemo } from 'react';",
                    useReducer: "import { useReducer } from 'react';",
                },
            },
        ],
    },
};
