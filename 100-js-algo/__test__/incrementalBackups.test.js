const expect = require("expect");
const { incrementalBackups } = require("../incrementalBackups");

describe("Incremental Backups", () => {
    test("Backing up files", () => {
        const lastBackupTime = 461620205;
        const fileChanges = [[461620203, 1], [461620204, 2], [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], [461620208, 1]];
        const expected = [1, 3, 5];
        const actual = incrementalBackups(lastBackupTime, fileChanges);
        expect(actual).toStrictEqual(expected);
    });
});
