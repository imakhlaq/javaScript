"use strict";

// function name1() {
//   console.log(`name akhlaq`);
// }

// name1();
// name1();
// name1();
// name1();

function juiceMaker(apple, orange) {
  console.log(apple, orange);

  const juice = `Apple ${apple} Orange ${orange}`;
  return juice;
}

const juice = juiceMaker(2, 4);
console.log(juice);
