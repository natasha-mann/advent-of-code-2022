const readFile = require("../utils/readFile");

const data = readFile("./data.txt", "\n");

const determineScore = (play1, play2, player) => {
  let score = 0;
  const playedSign = player === "me" ? play2 : play1;
  const againstSign = player === "me" ? play1 : play2;

  const rock = "X" || "A";
  const paper = "Y" || "B";
  const scissors = "Z" || "C";

  if (playedSign === rock) {
    score += 1;
    // draw
    if (againstSign === rock) {
      score += 3;
    }
    if (againstSign === paper) {
      score += 0;
    }
    if (againstSign === scissors) {
      score += 6;
    }
  }
  if (playedSign === paper) {
    score += 2;
    if (againstSign === rock) {
      score += 6;
    }
    if (againstSign === paper) {
      score += 3;
    }
    if (againstSign === scissors) {
      score += 0;
    }
  }
  if (playedSign === scissors) {
    score += 3;
    if (againstSign === rock) {
      score += 0;
    }
    if (againstSign === paper) {
      score += 6;
    }
    if (againstSign === scissors) {
      score += 3;
    }
  }

  return score;
};

const rockPaperScissors = (input, part) => {
  let data = input;

  if (part === 2) {
    data = input.map((e) => {
      const [opponent, me] = e.split(" ");
      if (me === "X") {
        //need to lose
        if (opponent === "A") {
          return `${opponent} Z`;
        }
        if (opponent === "B") {
          return `${opponent} X`;
        }
        if (opponent === "C") {
          return `${opponent} Y`;
        }
      }

      if (me === "Y") {
        //need to draw
        if (opponent === "A") {
          return `${opponent} X`;
        }
        if (opponent === "B") {
          return `${opponent} Y`;
        }
        if (opponent === "C") {
          return `${opponent} Z`;
        }
      }

      if (me === "Z") {
        //need to win
        if (opponent === "A") {
          return `${opponent} Y`;
        }
        if (opponent === "B") {
          return `${opponent} Z`;
        }
        if (opponent === "C") {
          return `${opponent} X`;
        }
      }
    });
  }

  const myScore = data
    .map((e) => {
      const [opponent, me] = e.split(" ");
      const myScore = determineScore(opponent, me, "me");
      return myScore;
    })
    .reduce((acc, curr) => (acc = acc + curr), 0);

  return myScore;
};

const score = rockPaperScissors(data, 1);
console.log(score);

const partTwo = rockPaperScissors(data, 2);
console.log(partTwo);
