const config: any = {
    extends: [
        "./node_modules/gts/",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
    },
    plugins: ["unicorn"],
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["warn", "double"],
        "node/no-unpublished-import": 0,
        "max-nested-callbacks": ["error", 3],
        "unicorn/filename-case": "off",
        "unicorn/no-reduce": "off",
        complexity: ["error", 3],
        "max-statements-per-line": ["error", { max: 25 }],
    },
};

export default config;
