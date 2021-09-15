const fs = require("fs");

// creating a new file
// fs.writeFileSync("read.txt", "Welcome to new file")

//overided the existing file
// fs.writeFileSync("read.txt", "1111111111111111111111111");

// fs.appendFileSync("read.txt", "  this is appended text");

// console.log(fs.readFileSync("read.txt").toString());

// rename the file
fs.renameSync("read.txt", "readWrite.txt");