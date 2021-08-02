module.exports = {
    extends: [
        'eslint:recommended',
        './1_errors.js',
        './2_bestPractices.js',
        './3_variables.js',
        './4_stylistic.js',
        './5_es6.js',
    ].map(require.resolve),
};
