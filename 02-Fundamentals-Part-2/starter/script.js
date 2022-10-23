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
const fruitcuter = (fruite) => fruite * 3;

//function calling another function
const juiceMaker = function (apple, banana) {
  //first cut the apple and bananas
  const applePieces = fruitcuter(apple);
  const bananaPieces = fruitcuter(banana);
  const juice = `This juice contain ${applePieces} apple pices and ${bananaPieces} banana pices`;
  return juice;
};

console.log(juiceMaker(2, 3));
