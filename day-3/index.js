const readFile = require("../utils/readFile");

const data = readFile("./data.txt", "\n");

const test = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];

const matcher = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const dayThree = (data, part) => {
  let sumOfPriorities = 0;
  const errors = [];
  // console.log(data);

  if (part === 1) {
    data.forEach((rucksack) => {
      // console.log(rucksack.length);
      const firstCompartment = rucksack.slice(0, rucksack.length / 2);
      const secondCompartment = rucksack.slice(
        rucksack.length / 2,
        rucksack.length
      );
      const duplicates = [...firstCompartment].filter((c) =>
        secondCompartment.includes(c)
      );
      const unique = new Set(duplicates);
      unique.forEach((l) => errors.push(l));
    });

    return errors.reduce((acc, curr) => {
      const value = matcher.findIndex((e) => e === curr) + 1;
      return (acc = acc + value);
    }, 0);
  }

  if (part === 2) {
    const groupedElves = [];
    for (let i = 0; i < data.length; i += 3) {
      groupedElves.push(data.slice(i, i + 3));
    }

    const badges = groupedElves.map((group, index) => {
      const duplicates = [...group[0]].filter((c) => group[1].includes(c));

      return [...duplicates].filter((c) => group[2].includes(c));
    });

    let total = 0;

    badges.forEach((badge) => {
      total += matcher.findIndex((e) => e === badge[0]) + 1;
    });

    return total;
  }
};

const sumOfPriorities = dayThree(data, 1);
console.log(sumOfPriorities);

const badgePriorities = dayThree(data, 2);
console.log(badgePriorities);
