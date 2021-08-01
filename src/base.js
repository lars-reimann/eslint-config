module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        // ESLint Possible Errors
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
        'require-atomic-updates': 'error',

        // ESLint Best Practices
        'default-case-last': 'error',
        'default-params-last': 'error',
        'dot-notation': 'error',
        eqeqeq: 'error',
        'no-constructor-return': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': [
            'error',
            {
                disallowTemplateShorthand: true,
            },
        ],
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-return-assign': ['error', 'always'],
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'prefer-named-capture-group': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        radix: 'error',
        'require-unicode-regexp': error,
        yoda: 'error',

        // ESLint Variables
        'no-undef-init': 'error',
        'no-undefined': 'error',

        // ESLint Stylistic Issues
        camelcase: 'error',
        'consistent-this': ['error', 'self'],
        'func-names': ['error', 'as-needed'],
        'func-style': ['error', 'expression'],
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-new-object': 'error',
        'no-restricted-syntax': ['error', 'ForInStatement', 'WithStatement'],
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'one-var': ['error', 'never'],
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',

        // ESLint ECMAScript 6
        'no-duplicate-imports': [
            'error',
            {
                defaultAssignment: false,
            },
        ],
        'no-useless-computed-key': [
            'error',
            {
                enforceForClassMembers: true,
            },
        ],
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'symbol-description': 'error',
    },

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                // typescript-eslint
                '@typescript-eslint/array-type': [
                    'error',
                    {
                        default: 'generic',
                    },
                ],
                '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    {
                        assertionStyle: 'as',
                        objectLiteralTypeAssertions: 'never',
                    },
                ],
            },
        },
    ],

    // TODO plugins
    // rest of typescript (from consistent-type-assertions)
    // import
    // node ?
};
