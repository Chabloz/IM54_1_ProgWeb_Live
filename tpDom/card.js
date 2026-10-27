import { shuffle } from '../utils/array.js';
import { on } from '../utils/dom.js';

const deck = document.querySelectorAll('.deck > playing-card');

function clearSelection() {
  for (const card of deck) {
    card.classList.remove('selected');
  }
}

function selectCards(selector) {
  clearSelection();
  const cards = document.querySelectorAll(selector);
  for (const card of cards) {
    card.classList.add('selected');
  }
}

document.querySelector("#select-ace-spade")
  .addEventListener('click', () => selectCards('#SPADE-ACE'));

document.querySelector("#select-hearts")
  .addEventListener('click', () => selectCards('.deck .heart'));

document.querySelector("#select-red")
  .addEventListener('click', () => selectCards('.deck .heart, .deck .diamond'));

document.querySelector("#select-face-cards")
  .addEventListener('click', () => selectCards('.deck [data-face-card]'));

document.querySelector("#select-red-face-cards")
  .addEventListener('click', () => selectCards('.deck .heart[data-face-card], .deck .diamond[data-face-card]'));

document.querySelector("#select-not-spades")
  .addEventListener('click', () => selectCards('.deck playing-card:not(.spade)'));

on("#draw-hand", 'click', () => {
    const deckShuffle = shuffle([...deck]);
    const playerHand = deckShuffle.slice(0, 5);
    const playerCards = [];
    for (const card of playerHand) {
      const cardClone = card.cloneNode(true);
      cardClone.removeAttribute('id');
      cardClone.classList.remove('selected');
      playerCards.push(cardClone);
    }
    const domHand = document.querySelector('#hand')
    domHand.replaceChildren(...playerCards);
  });

  on('playing-card', 'click', (card) => console.log(card));
