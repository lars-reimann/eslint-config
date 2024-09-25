import svelte from "eslint-plugin-svelte";
import parser from "svelte-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("@lars-reimann", "plugin:svelte/recommended"),
    {
        plugins: {
            svelte,
        },

        languageOptions: {
            ecmaVersion: 5,
            sourceType: "script",

            parserOptions: {
                extraFileExtensions: [".svelte"],
            },
        },
    },
    {
        files: ["**/*.svelte"],

        languageOptions: {
            parser: parser,
            ecmaVersion: 5,
            sourceType: "script",

            parserOptions: {
                parser: "@typescript-eslint/parser",
            },
        },
    }
];
