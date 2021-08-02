module.exports = {
    env: {
        es6: true,
    },
    rules: {
        // formatting
        'arrow-body-style': 'off',

        // formatting
        'arrow-parens': 'off',

        // formatting
        'arrow-spacing': 'off',

        // 'constructor-super': use recommended,

        // formatting
        'generator-star-spacing': 'off',

        // 'no-class-assign': use recommended,

        'no-confusing-arrow': [
            'error',
            {
                allowParens: true,
            },
        ],

        // 'no-const-assign': use recommended,

        // 'no-dupe-class-members': use recommended,

        'no-duplicate-imports': [
            'error',
            {
                defaultAssignment: false,
            },
        ],

        // 'no-new-symbol': use recommended,

        'no-restricted-exports': [
            'error',
            {
                restrictedNamedExports: [
                    'default', // use `export default` to provide a default export
                    'then', // this will cause tons of confusion when your module is dynamically `import()`ed
                ],
            },
        ],

        'no-restricted-imports': 'off',

        // 'no-this-before-super': use recommended,

        'no-useless-computed-key': [
            'error',
            {
                enforceForClassMembers: true,
            },
        ],

        'no-useless-constructor': 'error',

        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],

        'no-var': 'error',

        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: false,
                avoidExplicitReturnArrows: true,
            },
        ],

        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],

        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],

        'prefer-destructuring': 'off',

        'prefer-numeric-literals': 'error',

        'prefer-rest-params': 'error',

        'prefer-spread': 'error',

        'prefer-template': 'error',

        // 'require-yield': use recommended,

        // formatting
        'rest-spread-spacing': 'off',

        'sort-imports': 'off',

        'symbol-description': 'error',

        // formatting
        'template-curly-spacing': 'off',

        // formatting
        'yield-star-spacing': 'off',
    },
};
