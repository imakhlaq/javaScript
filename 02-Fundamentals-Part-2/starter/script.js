"use strict";

// function name1() {
//   console.log(`name akhlaq`);
// }

// name1();
// name1();
// name1();
// name1();

// function juiceMaker(apple, orange) {
//   console.log(apple, orange);

//   const juice = `Apple ${apple} Orange ${orange}`;
//   return juice;
// }

// const juice = juiceMaker(2, 4);
// console.log(juice);

//arrow function
// const fruitcuter = (fruite) => fruite * 3;

// //function calling another function
// const juiceMaker = function (apple, banana) {
//   //first cut the apple and bananas
//   const applePieces = fruitcuter(apple);
//   const bananaPieces = fruitcuter(banana);
//   const juice = `This juice contain ${applePieces} apple pices and ${bananaPieces} banana pices`;
//   return juice;
// };

// console.log(juiceMaker(2, 3));

//
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const qulaAvg = calcAvg(85, 54, 41);
const dolAvg = calcAvg(23, 34, 27);
const checkWinner = function (qulaAvg, dolAvg) {
  if (qulaAvg >= dolAvg * 2) {
    return `Koalas won by ${qulaAvg} vs ${dolAvg}`;
  } else if (dolAvg >= qulaAvg * 2) {
    return `Dolphins won by ${dolAvg} vs ${qulaAvg}`;
  } else {
    return `Draw No Winner`;
  }
};

console.log(checkWinner(qulaAvg, dolAvg));
