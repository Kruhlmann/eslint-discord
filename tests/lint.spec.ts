import { lint_ecmascript } from "../src/linter";
import { read_file_async } from "../src/fs";

let typescript_error_code: string;

describe("Linter", () => {
    beforeAll((done) => {
        Promise.all([
            read_file_async(__dirname + "/../res/typescript_error_file"),
        ]).then((files: string[]) => {
            typescript_error_code = files[0];
            done();
        });
    });

    it("should report the error in an incorrect ts file", () => {
        const result = lint_ecmascript(typescript_error_code, true);
        console.log(result);
        expect(result).toBeDefined();
    });
});
