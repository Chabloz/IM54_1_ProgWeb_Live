const btn = document.querySelector("#select-ace-spade");
btn.addEventListener('click', function (evt) {
  const aceOfSpade = document.querySelector("#SPADE-ACE");
  aceOfSpade.classList.add('selected');
  // console.log('btn');
  // console.log(evt);
  // evt.stopPropagation();
})
const body = document.querySelector("body");
body.addEventListener('click', evt => {
  console.log('body');
  console.log(evt);
});

const aceOfSpade = document.querySelector("#SPADE-ACE");
const aceOfSpadeClone = aceOfSpade.cloneNode(true);
aceOfSpadeClone.setAttribute('id', 'SPADE-ACE-CLONE');

const hand = document.querySelector('#hand');
hand.append(aceOfSpadeClone);

// const arr = [1,2,3,4];
// const arrClone = [...arr];