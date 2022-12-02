const fs = require("fs");

const readFile = (path, splitVal) => {
  return fs.readFileSync(path).toString().split(splitVal);
};

module.exports = readFile;
