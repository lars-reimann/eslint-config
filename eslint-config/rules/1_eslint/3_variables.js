const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
    rules: {
        'init-declarations': 'off',

        // 'no-delete-var': use recommended,

        'no-label-var': 'error',

        'no-restricted-globals': [
            'error',
            {
                name: 'isFinite',
                message: 'Use Number.isFinite instead.',
            },
            {
                name: 'isNaN',
                message: 'Use Number.isNaN instead.',
            },
        ].concat(confusingBrowserGlobals),

        'no-shadow': 'error',

        // 'no-shadow-restricted-names': use recommended,

        // 'no-undef': use recommended,

        'no-undef-init': 'error',

        'no-undefined': 'error',

        // 'no-unused-vars': use recommended,

        'no-use-before-define': [
            'error',
            {
                functions: true,
                classes: true,
                variables: true,
            },
        ],
    },
};
