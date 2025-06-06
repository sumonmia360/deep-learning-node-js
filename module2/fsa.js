console.log("task-1");

const { error } = require("console");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const filePath1 = path.join(__dirname, "test.txt");
// fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("Sorry something is error", err);
//     return;
//   }
//   //   console.log(data);

//   fs.writeFile(filePath1, data, { encoding: "utf8" }, (err) => {
//     if (err) {
//       console.log("oh the write file error", err);
//     }

//     console.log("succsessfull someting");
//   });
// });

// const testFile = "Bangladesh was now very fast growing";

// // console.log(data);
// console.log("task-3");

const readSream = fs.createReadStream(filePath, { encoding: "utf-8" });
const writeSream = fs.createWriteStream(filePath1, { encoding: "utf-8" });

readSream.on("data", (data) => {
  console.log(data);

  writeSream.write(data, (err) => {
    if (err) {
      throw error("The error come from the writeStream", err);
    }
  });
});

readSream.on("error", (err) => {
  if (err) {
    throw error("The Big Error", err);
  }
});

readSream.on("end", () => {
  console.log("The readsream is end");
  writeSream.end();
});

writeSream.on("finish", () => {
  console.log("The Writing is finished");
});
