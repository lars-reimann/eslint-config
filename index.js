module.exports = {
    extends: ['airbnb-typescript', 'prettier'],

    plugins: [
        '@typescript-eslint',
        'import',
        'react',
        'react-hooks',
        'jsx-a11y',
        'jest',
        'testing-library',
    ],

    rules: {
        // ESLint: Errors
        'no-loss-of-precision': 'error',
        'no-promise-executor-return': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-optional-chaining': [
            'error',
            {
                disallowArithmeticOperators: true,
            },
        ],
        'no-useless-backreference': 'error',

        // ESLint: Best practices
        'array-callback-return': [
            'error',
            {
                allowImplicit: false,
                checkForEach: true,
            },
        ],
        'default-case-last': 'error',
        'default-param-last': 'error',
        eqeqeq: 'error',
        'max-classes-per-file': 'off',
        'no-constructor-return': 'error',
        'no-else-return': 'off',
        'no-implicit-coercion': [
            'error',
            {
                disallowTemplateShorthand: true,
            },
        ],
        'no-invalid-this': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-param-reassign': ['error', { props: false }],
        'no-restricted-properties': [
            'error',
            {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead.',
            },
            {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead.',
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead.',
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead.',
            },
            {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead.',
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead.',
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            },
        ],
        'no-unmodified-loop-condition': 'error',
        'no-useless-call': 'error',
        'prefer-regex-literals': 'error',
        'require-unicode-regexp': 'error',

        // ESLint: Variables
        'no-undefined': 'error',

        // ESLint: Style
        'func-names': ['error', 'as-needed'],
        'func-style': ['error', 'expression'],
        'no-continue': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys, values, entries} and iterate over the resulting array.',
            },
        ],
        'no-unneeded-ternary': 'error',
        'prefer-exponentiation-operator': 'error',

        // ESLint: ES6
        'no-restricted-exports': [
            'error',
            {
                restrictedNamedExports: ['default', 'then'],
            },
        ],
        'no-useless-computed-key': [
            'error',
            {
                enforceForClassMembers: true,
            },
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: false,
                avoidExplicitReturnArrows: true,
            },
        ],
        'prefer-destructuring': 'off',

        // Typescript
        '@typescript-eslint/lines-between-class-members': 'off',

        // Import
        'import/prefer-default-export': 'off',

        // React
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
    },

    overrides: [
        // Only for tests
        {
            files: [
                '**/__tests__/**/*.[jt]s?(x)',
                '**/?(*.)+(spec|test).[jt]s?(x)',
            ],
            extends: [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'plugin:testing-library/react',
            ],
        },
    ],
};
