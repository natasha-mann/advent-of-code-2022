const readFile = require("../utils/readFile");

const data = readFile("./data.txt", "\n");
const test = readFile("./test.txt", "\n");

const checkFullyContained = (pair) => {
  const [elfOne, elfTwo] = pair.split(",");
  // console.log(elfOne, elfTwo);

  const [oneStart, oneEnd] = elfOne.split("-");
  const [twoStart, twoEnd] = elfTwo.split("-");

  if (
    parseInt(oneStart) >= parseInt(twoStart) &&
    parseInt(oneEnd) <= parseInt(twoEnd)
  )
    return true;

  if (
    parseInt(twoStart) >= parseInt(oneStart) &&
    parseInt(twoEnd) <= parseInt(oneEnd)
  )
    return true;
};

const dayFour = (data) => {
  // console.log(data);
  const fullContainedPairs = data
    .map((pair, i) => {
      const fullyContained = checkFullyContained(pair);
      return fullyContained;
    })
    .filter((p) => p === true).length;

  console.log(fullContainedPairs);
};

dayFour(data);
