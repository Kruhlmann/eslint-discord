import * as fs from "fs";

/**
 * Reads a file asynchronously from the filesystem and returns its contents as af
 * promise.
 *
 * @param target - File path.
 * @param options - FS options.
 * @returns The string contents of the file.
 */
export async function read_file_async(
    target: string | number | Buffer | URL,
    options: fs.BaseEncodingOptions = { encoding: "utf8" }
): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(target, options, (error: Error, data: string) => {
            if (error) {
                reject(error);
            }
            resolve(data);
        });
    });
}
