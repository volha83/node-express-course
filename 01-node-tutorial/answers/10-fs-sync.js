const { writeFileSync, readFileSync } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temporary", "fileA.txt");
writeFileSync(filePath, "This is line 1 ");
writeFileSync(filePath, "This is line 2 ", { flag: "a" });
writeFileSync(filePath, "This is line 3 ", { flag: "a" });

const fileContents = readFileSync(filePath, "utf-8");

console.log("Contents of fileA.txt:");
console.log(fileContents);
