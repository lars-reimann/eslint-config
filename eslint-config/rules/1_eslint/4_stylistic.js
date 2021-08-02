module.exports = {
    rules: {
        // formatting
        'array-bracket-newline': 'off',

        // formatting
        'array-bracket-spacing': 'off',

        // formatting
        'array-element-newline': 'off',

        // formatting
        'block-spacing': 'off',

        // formatting
        'brace-style': 'off',

        camelcase: [
            'error',
            {
                properties: 'always',
                ignoreDestructuring: false,
                ignoreImports: false,
                ignoreGlobals: false,
                allow: [],
            },
        ],

        'capitalized-comments': 'off',

        // formatting
        'comma-dangle': 'off',

        // formatting
        'comma-spacing': 'off',

        // formatting
        'comma-style': 'off',

        // formatting
        'computed-property-spacing': 'off',

        'consistent-this': ['error', 'self'],

        // formatting
        'eol-last': 'off',

        // formatting
        'func-call-spacing': 'off',

        'func-name-matching': 'off',

        'func-names': ['error', 'as-needed'],

        'func-style': ['error', 'expression'],

        // formatting
        'function-call-argument-newline': 'off',

        // formatting
        'function-paren-newline': 'off',

        'id-denylist': 'off',

        'id-length': 'off',

        'id-match': 'off',

        // formatting
        'implicit-arrow-linebreak': 'off',

        // formatting
        indent: 'off',

        // formatting
        'jsx-quotes': 'off',

        // formatting
        'key-spacing': 'off',

        // formatting
        'keyword-spacing': 'off',

        // formatting
        'line-comment-position': 'off',

        // formatting
        'linebreak-style': 'off',

        // formatting
        'lines-around-comment': 'off',

        // formatting
        'lines-between-class-members': 'off',

        'max-depth': 'off',

        'max-len': 'off',

        'max-lines': 'off',

        'max-lines-per-function': 'off',

        'max-nested-callbacks': 'off',

        'max-params': 'off',

        'max-statements': 'off',

        'max-statements-per-line': 'off',

        'multiline-comment-style': 'off',

        // formatting
        'multiline-ternary': 'off',

        'new-cap': [
            'error',
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: [],
                proerties: true,
            },
        ],

        'new-parens': 'error',

        // formatting
        'newline-per-chained-call': 'off',

        'no-array-constructor': 'error',

        'no-bitwise': 'error',

        'no-continue': 'off',

        'no-inline-comments': 'off',

        'no-lonely-if': 'error',

        'no-mixed-operators': 'off',

        // formatting
        // 'no-mixed-spaces-and-tabs': use recommended,

        'no-multi-assign': 'error',

        // formatting
        'no-multiple-empty-lines': 'off',

        'no-negated-condition': 'off',

        'no-nested-ternary': 'error',

        'no-new-object': 'error',

        'no-plusplus': 'off',

        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys, values, entries} and iterate over the resulting array.',
            },
        ],

        // formatting
        'no-tabs': 'off',

        'no-ternary': 'off',

        // formatting
        'no-trailing-spaces': 'off',

        'no-underscore-dangle': [
            'error',
            {
                allow: [],
                allowAfterThis: false,
                allowAfterSuper: false,
                allowAfterThisConstructor: false,
                allowFunctionParams: false,
                enforceInMethodNames: true,
            },
        ],

        'no-unneeded-ternary': 'error',

        // formatting
        'no-whitespace-before-property': 'off',

        // formatting
        'nonblock-statement-body-position': 'off',

        // formatting
        'object-curly-newline': 'off',

        // formatting
        'object-curly-spacing': 'off',

        // formatting
        'object-property-newline': 'off',

        'one-var': ['error', 'never'],

        // formatting
        'one-var-declaration-per-line': 'off',

        'operator-assignment': ['error', 'always'],

        // formatting
        'operator-linebreak': 'off',

        // formatting
        'padded-blocks': 'off',

        // formatting
        'padding-line-between-statements': 'off',

        'prefer-exponentiation-operator': 'error',

        'prefer-object-spread': 'error',

        // formatting
        'quote-props': 'off',

        // formatting
        quotes: 'off',

        // formatting
        semi: 'off',

        // formatting
        'semi-spacing': 'off',

        'sort-keys': 'off',

        'sort-vars': 'off',

        // formatting
        'space-before-blocks': 'off',

        // formatting
        'space-before-function-paren': 'off',

        // formatting
        'space-in-parens': 'off',

        // formatting
        'space-infix-ops': 'off',

        // formatting
        'space-unary-ops': 'off',

        // formatting
        'spaced-comment': 'off',

        // formatting
        'switch-colon-spacing': 'off',

        // formatting
        'template-tag-spacing': 'off',

        // formatting
        'unicode-bom': 'off',

        // formatting
        'wrap-regex': 'off',
    },
};
