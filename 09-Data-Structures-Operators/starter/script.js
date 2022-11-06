'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//player array
// const player1 = [
//   'Bob Donaldson',
//   'ren Scotland',
//   'Fred Erentz',
//   'Joe Cassidy',
//   '	Edwin van der Sar',
//   '	Gary Neville',
//   '	Patrice Evra',
//   '	Eric Bailly',
//   '	Victor Lindelöf',
//   '	David De Gea',
//   'Lisandro Martinez',
// ];
// const player2 = [
//   'Bob Donaldsonx2',
//   'ren Scotland2',
//   'Fred Erentz2',
//   'Joe Cassidy2',
//   '	Edwin van der Sar2',
//   '	Gary Neville2',
//   '	Patrice Evra2',
//   '	Eric Bailly2',
//   '	Victor Lindelöf2',
//   '	David De Gea2',
//   'Lisandro Martinez2',
// ];

// const [gk1, ...BMfeildplayer] = player1;

// const allplayer = [...player1, ...player2];

// const BMall = [...player1, 'thiago', 'countino', 'perisic'];

const game = {
  team_1: 'Bob Donaldson',
  team_2: 'Bob Donaldsonx2',
  players: [
    [
      'ren Scotland',
      'Fred Erentz',
      'Joe Cassidy',
      '	Edwin van der Sar',
      '	Gary Neville',
      '	Patrice Evra',
      '	Eric Bailly',
      '	Victor Lindelöf',
      '	David De Gea',
      'Lisandro Martinez',
    ],
    [
      'Bob Donaldsonx2',
      'ren Scotland2',
      'Fred Erentz2',
      'Joe Cassidy2',
      '	Edwin van der Sar2',
      '	Gary Neville2',
      '	Patrice Evra2',
      '	Eric Bailly2',
      '	Victor Lindelöf2',
      '	David De Gea2',
      'Lisandro Martinez2',
    ],
  ],
  //const: ([team10, team20] = game.players),

  score: 4,
  ScoreByPlayer: [
    'Fred Erentz2',
    'Gary Neville',
    '	Edwin van der Sar2',
    '	Eric Bailly',
  ],
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [72, '🔁 Substitution'],
  [75, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...gameEvents.values()];
const nevents = [...new Set(events)];

gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();

console.log(`An anverage event happens in ${time / gameEvents.size}`);

for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key} : ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key} : ${value}`);
  }
}
