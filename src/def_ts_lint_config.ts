import { Linter } from "eslint";

const config: Linter.Config = {
    extends: [
        "./node_modules/gts/",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
    ],
    env: {
        es6: true,
        jasmine: true,
        commonjs: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
    },
    plugins: ["eslint-plugin-tsdoc", "unicorn"],
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["warn", "double"],
        "node/no-unpublished-import": 0,
        "tsdoc/syntax": "error",
        "max-nested-callbacks": ["error", 3],
        "unicorn/filename-case": "off",
        "unicorn/no-reduce": "off",
        complexity: ["error", 3],
        "max-statements-per-line": ["error", { max: 25 }],
    },
};

export default config;
