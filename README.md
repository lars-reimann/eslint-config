# eslint-config

.eslintrc.js

```js
module.exports = {
    root: true,
    parserOptions: {
        project: './tsconfig.json',
    },
    extends: '@lars-reimann',
};
```

tsconfig.json

```json
{
    "extends": "@tsconfig/node16/tsconfig.json",
    "include": [".eslintrc.js", "index.js"],
    "exclude": ["node_modules"]
}
```
