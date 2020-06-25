import * as path from "path";

import { read_file_async } from "../src/fs";
import { lint_ecmascript } from "../src/linter";

let typescript_error_code: string;

function get_demo_source(filename: string): string {
    return path.join(__dirname, "../res", filename);
}

describe("Linter", () => {
    beforeAll((done) => {
        Promise.all([
            read_file_async(get_demo_source("typescript_error_file.ts")),
        ]).then((files: string[]) => {
            typescript_error_code = files[0];
            done();
        });
    });

    it("should report the error in an incorrect ts file", async (done) => {
        const result = await lint_ecmascript(typescript_error_code, true);
        console.log(result);
        expect(result).toBeDefined();
        done();
    });
});
