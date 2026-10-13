import { shuffle } from "../utils/array.js";

const deck = document.querySelectorAll('.deck > playing-card');
console.log(deck);
const deckShuffled = shuffle([...deck]);
console.log(deckShuffled);

const btn = document.querySelector("#select-ace-spade");
btn.addEventListener('click', function (evt) {
  const aceOfSpade = document.querySelector("#SPADE-ACE");
  aceOfSpade.classList.add('selected');
})

const aceOfSpade = document.querySelector("#SPADE-ACE");
const aceOfSpadeClone = aceOfSpade.cloneNode(true);
aceOfSpadeClone.setAttribute('id', 'SPADE-ACE-CLONE');

const hand = document.querySelector('#hand');
hand.append(aceOfSpadeClone);

// const arr = [1,2,3,4];
// const arrClone = [...arr];