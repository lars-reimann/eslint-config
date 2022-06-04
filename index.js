module.exports = {
    extends: [
        'plugin:import/recommended',
        'plugin:import/typescript',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier'
    ],

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
        'class-methods-use-this': 'off',
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
        'no-unused-vars': 'off', // covered by typescript-eslint
        'no-useless-call': 'error',
        'prefer-regex-literals': 'error',
        'require-unicode-regexp': 'error',
        'vars-on-top': 'off', // we don't allow var -> leads to duplicate errors

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
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-use-before-define': 'off',

        // Import
        'import/no-cycle': 'off',
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',

        // React: JSX
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-script-url': [
            'error',
            [
                {
                    name: 'Link',
                    props: ['to'],
                },
            ],
        ],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',

        // React: Props
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/default-props-match-prop-types': 'off',

        // React: Other
        'react/no-unstable-nested-components': 'error',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'function-expression',
                unnamedComponents: 'function-expression',
            },
        ],
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
