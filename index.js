module.exports = {
    extends: [
        // Airbnb Style Guide as base
        'airbnb-typescript',

        // Use all recommended settings
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:node/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',

        // Disable formatting rules
        'prettier',
    ],

    plugins: [
        '@typescript-eslint',
        'import',
        'node',
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
        'prefer-named-capture-group': 'error',
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

        // Typescript: Disable unnecessary rules from ESLint
        camelcase: 'off',
        'dot-notation': 'off',
        'no-array-constructor': 'off',
        'no-dupe-class-members': 'off',
        'no-empty-function': 'off',
        'no-implied-eval': 'off',
        'no-new-func': 'off',
        'no-loop-func': 'off',
        'no-magic-numbers': 'off',
        'no-redeclare': 'off',
        'no-shadow': 'off',
        'no-throw-literal': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'space-before-function-paren': 'off',
        'require-await': 'off',
        'no-return-await': 'off',
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
