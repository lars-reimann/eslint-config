module.exports = {
    rules: {
        'accessor-pairs': 'off',

        'array-callback-return': [
            'error',
            {
                allowImplicit: false,
                checkForEach: true,
            },
        ],

        'block-scoped-var': 'error',

        'class-methods-use-this': [
            'error',
            {
                exceptMethods: [],
            },
        ],

        complexity: 'off',

        'consistent-return': [
            'error',
            {
                treatUndefinedAsUnspecified: false,
            },
        ],

        curly: ['error', 'all'],

        'default-case': [
            'error',
            {
                commentPattern: '^no default$',
            },
        ],

        'default-case-last': 'error',

        'default-params-last': 'error',

        'dot-location': ['error', 'property'],

        'dot-notation': 'error',

        eqeqeq: 'error',

        'grouped-accessor-pairs': 'off',

        'guard-for-in': 'error',

        'max-classes-per-file': 'off',

        'no-alert': 'warn',

        'no-caller': 'error',

        // 'no-case-declarations': use recommended,

        'no-constructor-return': 'error',

        'no-div-regex': 'off',

        'no-else-return': 'off',

        'no-empty-function': 'error',

        // 'no-empty-pattern': use recommended,

        // == is disallowed anyway
        'no-eq-null': 'off',

        'no-eval': 'error',

        'no-extend-native': 'error',

        'no-extra-bind': 'error',

        'no-extra-label': 'error',

        // 'no-fallthrough': use recommended,

        'no-floating-decimal': 'error',

        // 'no-global-assign': use recommended,

        'no-implicit-coercion': [
            'error',
            {
                disallowTemplateShorthand: true,
            },
        ],

        'no-implicit-globals': 'off',

        'no-implied-eval': 'error',

        'no-invalid-this': 'error',

        'no-iterator': 'error',

        'no-labels': [
            'error',
            {
                allowLoop: false,
                allowSwitch: false,
            },
        ],

        'no-lone-blocks': 'error',

        'no-loop-func': 'error',

        'no-magic-numbers': 'off',

        // formatting
        'no-multi-spaces': 'off',

        'no-multi-str': 'error',

        'no-new': 'error',

        'no-new-func': 'error',

        'no-new-wrappers': 'error',

        'no-nonoctal-decimal-escape': 'error',

        // 'no-octal': use recommended,

        'no-octal-escape': 'error',

        'no-param-reassign': 'error',

        'no-proto': 'error',

        // 'no-redeclare': use recommended,

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

        'no-return-assign': ['error', 'always'],

        'no-return-await': 'error',

        'no-script-url': 'error',

        // 'no-self-assign': use recommended,

        'no-self-compare': 'error',

        'no-sequences': 'error',

        'no-throw-literal': 'error',

        'no-unmodified-loop-condition': 'error',

        'no-unused-expressions': 'error',

        // 'no-unused-labels': use recommended,

        'no-useless-call': 'error',

        // 'no-useless-catch': use recommended,

        'no-useless-concat': 'error',

        // 'no-useless-escape': use recommended,

        'no-useless-return': 'error',

        'no-void': 'error',

        'no-warning-comments': 'off',

        // 'no-with': use recommended,

        'prefer-named-capture-group': 'error',

        'prefer-promise-reject-errors': 'error',

        'prefer-regex-literals': 'error',

        radix: 'error',

        'require-await': 'off',

        'require-unicode-regexp': error,

        'vars-on-top': 'error',

        'wrap-iife': 'off',

        yoda: 'error',
    },
};
