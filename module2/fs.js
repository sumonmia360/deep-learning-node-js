const fs = require("fs");
const path = require("path");

console.log("task 1");

const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });

console.log(data);

console.log("task 3");

const newText = "Hello Bangladesh again";
const newfile = fs.writeFileSync(filePath, newText, { conding: "utf8" });

console.log(data);
