import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import vitest from "eslint-plugin-vitest";
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

export default [...fixupConfigRules(compat.extends(
    "plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb-typescript/base",
    "prettier",
)), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        import: fixupPluginRules(_import),
        vitest,
    },

    rules: {
        "no-loss-of-precision": "error",
        "no-promise-executor-return": "error",
        "no-unreachable-loop": "error",

        "no-unsafe-optional-chaining": ["error", {
            disallowArithmeticOperators: true,
        }],

        "no-useless-backreference": "error",

        "array-callback-return": ["error", {
            allowImplicit: false,
            checkForEach: true,
        }],

        "class-methods-use-this": "off",
        "default-case-last": "error",
        "default-param-last": "error",
        eqeqeq: "error",
        "max-classes-per-file": "off",
        "no-console": "error",
        "no-constructor-return": "error",
        "no-else-return": "off",

        "no-implicit-coercion": ["error", {
            disallowTemplateShorthand: true,
        }],

        "no-invalid-this": "error",
        "no-nonoctal-decimal-escape": "error",

        "no-param-reassign": ["error", {
            props: false,
        }],

        "no-restricted-properties": ["error", {
            object: "global",
            property: "isFinite",
            message: "Please use Number.isFinite instead.",
        }, {
            object: "self",
            property: "isFinite",
            message: "Please use Number.isFinite instead.",
        }, {
            object: "window",
            property: "isFinite",
            message: "Please use Number.isFinite instead.",
        }, {
            object: "global",
            property: "isNaN",
            message: "Please use Number.isNaN instead.",
        }, {
            object: "self",
            property: "isNaN",
            message: "Please use Number.isNaN instead.",
        }, {
            object: "window",
            property: "isNaN",
            message: "Please use Number.isNaN instead.",
        }, {
            property: "__defineGetter__",
            message: "Please use Object.defineProperty instead.",
        }, {
            property: "__defineSetter__",
            message: "Please use Object.defineProperty instead.",
        }],

        "no-unmodified-loop-condition": "error",
        "no-unused-vars": "off",
        "no-useless-call": "error",
        "prefer-regex-literals": "error",
        "require-unicode-regexp": "error",
        "vars-on-top": "off",
        "func-names": ["error", "as-needed"],
        "func-style": ["error", "expression"],
        "no-continue": "off",
        "no-plusplus": "off",

        "no-restricted-syntax": ["error", {
            selector: "ForInStatement",
            message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys, values, entries} and iterate over the resulting array.",
        }],

        "no-unneeded-ternary": "error",
        "prefer-exponentiation-operator": "error",

        "no-restricted-exports": ["error", {
            restrictedNamedExports: ["default", "then"],
        }],

        "no-useless-computed-key": ["error", {
            enforceForClassMembers: true,
        }],

        "object-shorthand": ["error", "always", {
            ignoreConstructors: false,
            avoidQuotes: false,
            avoidExplicitReturnArrows: true,
        }],

        "prefer-destructuring": "off",
        "@typescript-eslint/lines-between-class-members": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
        }],

        "@typescript-eslint/no-use-before-define": "off",
        "import/no-cycle": "off",
        "import/no-default-export": "error",
        "import/prefer-default-export": "off",
    },
}, ...compat.extends("plugin:vitest/all").map(config => ({
    ...config,
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
})), {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],

    rules: {
        "vitest/max-expects": "off",
        "vitest/max-nested-describes": "off",
        "vitest/no-conditional-in-test": "off",
        "vitest/no-conditional-expect": "off",
        "vitest/no-conditional-tests": "off",
        "vitest/no-hooks": "off",
        "vitest/no-large-snapshots": "off",
        "vitest/prefer-expect-assertions": "off",
        "vitest/prefer-lowercase-title": "off",
    },
}];