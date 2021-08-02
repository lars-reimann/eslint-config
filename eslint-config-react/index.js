const base = require('./src/base');
const { extends: baseExtends, rules: baseRules, overrides: baseOverrides } = base;

module.exports = {
    extends: [...baseExtends, 'prettier'],
    rules: {
        ...baseRules,
    },

    overrides: [...baseOverrides],
};
