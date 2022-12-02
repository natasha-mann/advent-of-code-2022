const readFile = require("../utils/readFile");

const data = readFile("./data.txt", "\n\n").map((e) => e.split("\n"));

const mostCalories = (calories, part) => {
  const totalCalories = calories
    .map((e) => {
      return e.reduce((a, c) => (a = a + parseInt(c)), 0);
    }, 0)
    .sort((a, b) => b - a);

  if (part === 1) {
    return totalCalories[0];
  }

  if (part === 2) {
    return totalCalories
      .slice(0, 3)
      .reduce((acc, curr) => (acc = acc + curr), 0);
  }
};

const result = mostCalories(data, 1);

console.log(result);

const result2 = mostCalories(data, 2);

console.log(result2);

module.exports = mostCalories;
