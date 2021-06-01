"strict";

// Function to calculate average score
const calcAvg = (a, b, c) => a + b + c / 3;

const dolphinsScore = calcAvg(85, 54, 41);
const koalasScore = calcAvg(23, 34, 27);

// Function to calculate if the average of one team is double the avergae of opponent
const checkWinner = (avg_1, avg_2) => {
  if (avg_1 >= 2 * avg_2) {
    console.log(`Dolphis wins 🏆 ${avg_1} vs ${avg_2}`);
  } else if (avg_2 >= 2 * avg_1) {
    console.log(`Koala wins 🏆 ${avg_2} vs ${avg_1}`);
  } else {
    console.log("No one won!");
  }
};

checkWinner(dolphinsScore, koalasScore);
