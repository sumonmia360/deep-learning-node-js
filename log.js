// console.log(process.argv);
const { error, time } = require("console");
const fs = require("fs");
const filePath = require("path").join(__dirname, "log.txt");
const logData = process.argv.slice(2).join(" ");
const timeStamp = new Date();
console.log(timeStamp);

const text = `${logData} ${timeStamp} \n`;

if (!text) {
  console.log("❎ oh sorry bro please provide the data");
  console.log("Example: node index.js Hello world");
  process.exit(1);
}
fs.appendFile(filePath, text, { encoding: "utf-8" }, (err) => {
  if (err) {
    throw error("Sorry DAta not Append ", err);
  }
  console.log("The Data Was Successfully appeded");
});
// console.log("Bangaldesh");
console.log(logData);
