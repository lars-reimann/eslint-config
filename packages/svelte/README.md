# Configuration for [ESLint](https://eslint.org/) for Svelte Projects

To use this configuration:

1. Run `npm install --save-dev @lars-reimann/eslint-config-svelte`.
2. Create a `tsconfig.json` file. **If you already have one, you can skip this step.** You can start with a [base configuration](https://github.com/tsconfig/bases/) and then focus on the details that are unique to your project. Here's a possible example:
    ```json
    {
        "extends": "@tsconfig/node16/tsconfig.json",
        "include": ["src/**/*"],
        "exclude": ["node_modules", "**/*.test.ts"]
    }
    ```
3. Create an `.eslintrc.js` file with the following content. Replace the path to the `tsconfig.json` file. It is also possible to specify multiple projects by passing an array to `parserOptions.project` and pointing to the `tsconfig.json` of each project:
    ```js
    module.exports = {
        root: true,
        parserOptions: {
            tsconfigRootDir: __dirname,
            project: './tsconfig.json',
            extraFileExtensions: ['.svelte'],
        },
        extends: '@lars-reimann/svelte',
    };
    ```

## Common Issues

### Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.

**Example error message**:

```
0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: vite.config.ts.
The file must be included in at least one of the projects provided
```

**Solution 1**:

Ignore the file by adding it to the `.eslintignore` file:

```
vite.config.ts
```

**Solution 2**:

Follow the [instructions to create a `tsconfig.eslint.json`](https://typescript-eslint.io/linting/typed-linting/monorepos#one-root-tsconfigjson) file. Here is an example for such a file:

```json5
{
    "extends": "./tsconfig.json", // extend the actual tsconfig.json
    "compilerOptions": {
        "noEmit": true // prevent building with this configuration
    },
    "include": ["src/**/*", "vite.config.ts"], // include all TypeScript files
    "exclude": ["node_modules"] // don't exclude any TypeScript files
}
```
