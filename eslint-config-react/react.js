const base = require('./src/base');
const { extends: baseExtends, rules: baseRules, overrides: baseOverrides } = base;

module.exports = {
    extends: [...baseExtends, 'prettier'],
    rules: {
        ...baseRules,
    },

    overrides: [...baseOverrides],
};

// TODO (plugins)
// react
// react-hooks
// jsx-a11y
// jest
// testing-library
// @babel/eslint-plugin ???

// TODO
// "react/prop-types": "off",
// "react/jsx-uses-react": "off",
// "react/react-in-jsx-scope": "off"
