const { writeFile, readFile } = require("fs").promises;
const writer = async () => {
    try {
        await writeFile("trmp.txt", "First line\n");
        await writeFile("trmp.txt", "Second line\n", { flag: "a" });
        await writeFile("trmp.txt", "Third line\n", { flag: "a" });
    } catch (err) {
        console.log("error writing file:", err);
    }
};

const reader = async () => {
    try {
        const data = await readFile("temp.txt", "utf8");
        console.log("file contents:\n", data);
    } catch (err) {
        console.log("error reading file:", err);
    }
};

const readWrite = async () => {
    await writer();
    await reader();
};
readWrite();