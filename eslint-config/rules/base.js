module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
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
