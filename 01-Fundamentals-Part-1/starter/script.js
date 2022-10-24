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
// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
// console.log(
//   `The bill was ${bill}, the tip was ${tip} and total value ${bill + tip}`
// );

//challenge 4

// const empoly = {
//   fullName: "Akhlaq",
//   college: "Shambhunath college Of education",
//   friends: [1, 2, 3, 4, 5],
//   profession: "Student",
//   haveLicence: true,

//   detail: function () {
//     this.info = `${this.fullName} is ${this.profession} of ${
//       this.college
//     } and he has ${this.friends.length} and he ${
//       this.haveLicence ? "has" : "has no"
//     } licence`;
//     return this.info;
//   },
// };
// console.log(empoly.detail());

//challenges 5

// const people = {
//   fullname: "",
//   mass: 0,
//   height: 0,

//   BMICalc: function (fullname, mass, height) {
//     this.fullname = fullname;
//     this.mass = mass;
//     this.height = height;
//     this.BMI = mass / (height * height);
//     return this.BMI;
//   },

//   detail: function (fullname, mass, height) {
//     this.BMICalc(fullname, mass, height);
//     this.info = `${fullname} BMI is ${this.BMI} with weight ${this.mass}kg height ${this.height}m`;
//     return this.info;
//   },
// };

// if (
//   people.BMICalc("Mark Millers", 78, 1.69) >
//   people.BMICalc("Jhon Smith", 92, 1.95)
// ) {
//   console.log("Mark BMI is higher than Jhon");
//   console.log(people.detail("Mark Millers", 78, 1.69));
//   console.log(people.detail("Jhon Smith", 92, 1.95));
// } else {
//   console.log("john BMI is higher than Mark");
//   console.log(people.detail("Jhon Smith", 92, 1.95));
//   console.log(people.detail("Mark Millers", 78, 1.69));
// }

//challenge 4

const cal = {
  tipCal: function (bill) {
    if (bill >= 50 && bill <= 300) {
      return (15 / 100) * bill;
    } else if (bill > 300) {
      return (20 / 100) * bill;
    }
    return 0;
  },
  avg: function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const avrage = sum / arr.length;
    return avrage;
  },
};

const bill = [22, 295, 176, 440, 37, 105, 10, 100, 86, 52];

const tip = [];

const total = [];

for (let i = 0; i < bill.length; i++) {
  tip.push(cal.tipCal(bill[i]));
  total.push(bill[i] + tip[i]);
}
console.log(bill);
console.log(`Bill Avg is ${cal.avg(bill)}`);
console.log(tip);
console.log(`Tip Avg is ${cal.avg(tip)}`);
console.log(total);
console.log(`Total Avg is ${cal.avg(total)}`);
