module.exports = {
    root: true,
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    settings: {
        jest: {
            version: 28,
        },
    },
    extends: './index.js',
};
