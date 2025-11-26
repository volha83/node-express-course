const { createReadStream } = require("fs");
const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});
let count = 0;

stream.on("data", (chunk) => {
  count++;
  console.log("---new chunk---");
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Stream finished. Total chunks:", count);
});
stream.on("error", (err) => {
  console.log("Stream error:", err);
});
