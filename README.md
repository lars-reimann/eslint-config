# eslint-config

To use this configuration:

1. Run `npm install --save-dev @lars-reimann/eslint-config`.
2. Create a `tsconfig.json` file. **If you already have one you can skip this step.** You can start with a [base configuration](https://github.com/tsconfig/bases/) and then focus on the details that are unique to your project. Here's a possible example:

    ```json
    {
        "extends": "@tsconfig/node16/tsconfig.json",
        "include": ["src/**/*"],
        "exclude": ["node_modules", "**/*.spec.ts"]
    }
    ```

3. Create an `.eslintrc.js` file with the following content. Rreplace the path to the `tsconfig.json` file. It is also possible to specify multiple projects by passing an array to `parserOptions.project` and pointing to the `tsconfig.json` of each project:
    ```js
    module.exports = {
        root: true,
        parserOptions: {
            project: './tsconfig.json',
        },
        extends: '@lars-reimann',
    };
    ```
