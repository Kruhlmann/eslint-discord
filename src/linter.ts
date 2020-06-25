import { ESLint } from "eslint";

import def_js_config from "./def_js_lint_config";
import def_ts_config from "./def_ts_lint_config";

export async function lint_ecmascript(
    code: string,
    typescript = false,
    _config?: any
): Promise<ESLint.LintResult[]> {
    let config: any;
    if (_config) {
        config = _config;
    } else {
        config = typescript ? def_ts_config : def_js_config;
    }
    const linter = new ESLint({ baseConfig: config });
    console.log(code);
    return linter.lintText(code);
}
