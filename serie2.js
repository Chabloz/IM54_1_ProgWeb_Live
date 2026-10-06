const numbers = [1,2,3,4,5,6,7,8,9,0];

console.log(typeof numbers);
function double(n) {
  return n*2;
}
const doubleValues = numbers.map(double);
const doubleValuesD = numbers.map(function (n) {
  return n*2
});
const doubleValuesE = numbers.map(n => n*2);

console.log(numbers);
console.log(doubleValuesE);

// sans le map, "à la main":
const doubleValuesB = [];
for (let i=0; i<numbers.length; i++) {
  const n = numbers[i];
  doubleValues.push(double(n));
}

// sans le map, "à la main", mais avec for of
const doubleValuesc = [];
for (const n of numbers) {
  doubleValues.push(double(n));
}


const withoutLast = numbers.slice(0, -1)
console.log(withoutLast);

const odd = numbers.filter((nb) => nb % 2 != 0);
console.log(odd);

const even = numbers.filter((nb) => nb % 2 == 0);
console.log(even);

const evenAndOdd = [...even, ...odd];
console.log(evenAndOdd);

const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);
const concatenateAll = [...strings].join('').toLowerCase();
console.log(concatenateAll);
const reversedConcatenateAll = [...concatenateAll].reverse().join('');
console.log(reversedConcatenateAll);
console.log('Is a palindrom ? ' + (concatenateAll === reversedConcatenateAll));

const JACK = 11;
const QUEEN = 12;
const KING = 13;
const ACE = 14;

const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE];
const SUITS = ['hearts', 'spades', 'clubs', 'diamonds'];

function buildDeck() {
  const deck = [];
  for (const suit of SUITS ) {
    for (const rank of RANKS) {
      deck.push({rank, suit});
    }
  }
  return deck;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const deck = buildDeck();
const deckShuffled = shuffleArray([...deck]);
console.log(deck);
console.log(deckShuffled);