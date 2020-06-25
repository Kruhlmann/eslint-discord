import { Linter } from "eslint";
import def_ts_config from "./def_ts_lint_config";
import def_js_config from "./def_js_lint_config";

const linter = new Linter();

export function lint_ecmascript(
    code: string,
    typescript = false,
    _config?: Linter.Config
): Linter.LintMessage[] {
    let config: Linter.Config;
    if (_config) {
        config = config;
    } else {
        config = typescript ? def_ts_config : def_js_config;
    }
    return linter.verify(code, config);
}
