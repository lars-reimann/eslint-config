module.exports = {
    extends: ['@lars-reimann', 'plugin:svelte/recommended'],
    plugins: ['svelte'],

    parserOptions: {
        extraFileExtensions: ['.svelte'],
    },

    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ]
};
