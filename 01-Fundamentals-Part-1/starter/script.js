// let js = "amazing";
// let MName = "akhlaq Ahmad";
// console.log(MName);
// console.log(MName);
// console.log(MName);

// let myCountry = "india";
// let myContinet = "Asia";
// let population = "180M";
// console.log(myCountry);
// console.log(myContinet);
// console.log(population);

// let javasScriptIsFun = true;
// console.log(typeof javasScriptIsFun);
// console.log(javasScriptIsFun);
// javasScriptIsFun = "funnnn";
// console.log(typeof javasScriptIsFun);
// console.log(javasScriptIsFun);

// console.log(typeof null);

// const birthDate = 2001;
// const currentYear = 2022;
// const myAge = currentYear - birthDate;
// console.log(myAge);

// coding challange

// let markMass = 78;
// let johnMass = 92;

// let markHeight = 1.69;
// let johnHeight = 1.95;

// let markBmi = markMass / (markHeight * markHeight);
// let johnBmi = johnMass / (johnHeight * johnHeight);
// console.log(markBmi, johnBmi);

// const markBmiHigher = markBmi > johnBmi;
// console.log(markBmiHigher);

// markMass = 95;
// johnMass = 85;

// markHeight = 1.69;
// johnHeight = 1.88;

// markBmi = markMass / (markHeight * markHeight);
// johnBmi = johnMass / (johnHeight * johnHeight);
// const johnBmiHigher = markBmi < johnBmi;
// console.log(johnBmiHigher);

//string literals
// const namee = "Akhlaq";
// const day = 323;
// const dream = "great coder";

// const Akhlaq = "I'm " + namee + " the day is " + day + " Dream " + dream;
// console.log(Akhlaq);

// const newAkhlaq = `I am ${namee} the day is ${day} my dream is ${dream}`;
// console.log(newAkhlaq);

// console.log();

//if else

// const age = 5;
// if (age >= 18) {
//   console.log("i can drive");
// } else if (age > 3) {
//   console.log("hello kid");
// } else {
//   console.log("i can'T drive");
// }

//if else challange

// let markMass = 78;
// let johnMass = 92;

// let markHeight = 1.69;
// let johnHeight = 1.95;

// let markBmi = markMass / (markHeight * markHeight);
// let johnBmi = johnMass / (johnHeight * johnHeight);

// if (markBmi > johnBmi) {
//   console.log(`mark has higher bmi ${markBmi}`);
// } else {
//   console.log("jhon has higher bmi");
// }

// markMass = 95;
// johnMass = 85;

// markHeight = 1.69;
// johnHeight = 1.88;

// markBmi = markMass / (markHeight * markHeight);
// johnBmi = johnMass / (johnHeight * johnHeight);
// if (markBmi > johnBmi) {
//   console.log(`mark has higher bmi ${markBmi}`);
// } else {
//   console.log(`jhon has higher bmi ${johnBmi}`);
// }

//type conversion
// const birthDate = "1234";

// console.log(Number(birthDate)  + 4);

//type coresion
// const n = "232";
// console.log(n + 2 - 3 - "23");

//=== vs ==

// ===
// const n = 18;
// if ("18" === 18) {
//   console.log("coresion");
// } else {
//   console.log("Not coresion");
// }
// ==
// const n = 18;
// if ("18" == 18) {
//   console.log("coresion");
// } else {
//   console.log("Not coresion");
// }
//taking input
// const favNumber = prompt("Enter your Fav number: ");
// console.log(favNumber);
// console.log(typeof favNumber);

//challenge 3

// const avgeDolphin = (96 + 108 + 89) / 3;
// const avgeKolas = (88 + 932 + 110) / 3;
// console.log(avgeDolphin);
// console.log(avgeKolas);

// if (avgeDolphin > avgeKolas && avgeDolphin >= 100) {
//   console.log("Dolphine wins");
// } else if (avgeDolphin < avgeKolas && avgeKolas >= 100) {
//   console.log("Kolas wins");
// } else if (
//   avgeDolphin === avgeKolas ||
//   (avgeDolphin < 100 && avgeKolas < 100)
// ) {
//   console.log("Draw");
// }
//switch
// const day = "fsfsf";

// switch (day) {
//   case "monday": {
//     console.log("its moday");
//     break;
//   }
//   case "tuesday": {
//     console.log("its tuesday");
//     break;
//   }
//   case "wednessday": {
//     console.log("its wednessday");
//     break;
//   }
//   case "thrusday": {
//     console.log("its thrusday");
//     break;
//   }
//   case "friday": {
//     console.log("its friday");
//     break;
//   }
//   case "saturday": {
//     console.log("its saturday");
//     break;
//   }
//   case "sunday": {
//     console.log("its sunday");
//     break;
//   }
//   default: {
//     console.log("world ended");
//     break;
//   }
// }
//templete literal
// console.log(`I am ${"akhlaq"} how`);

//ternary operator
// const age = 22424;
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "water" : "juice"}`);

//coding challenge 4
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip} and total value ${bill + tip}`
);
