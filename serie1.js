// 1) Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.
function getMax(a, b, c) {
  if (a > b && a > c) return a;
  if (b >c && b > c) return b;
  return c;
}

// let max = getMax(1, 5, 2);
// console.log("1, 5, 2 => " + max);
// max = getMax(0, 1, 2);
// console.log("0, 1, 2 =>" + max);
// max = getMax(2, 1, 0);
// console.log("2,1,0 => " + max);
// max = getMax(0, 5, 5);
// console.log("0, 5, 5 =>" + max);
// max = getMax(5, 8, 2);
// console.log("5, 8, 2 =>" + max);

// 2) Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire entre une borne inférieure et une borne supérieure (bornes entières et comprises dans l'intervalle).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// for (let i=0; i<100; i++) {
//   console.log(getRandomInt(1,6));
// }

function getEven(n) {
  for (let x=0; x <= n; x = x + 2){
    console.log(x);
  }
}

function getEvenV2(n) {
  for (let x=0; x <= n; x++){
    if (x % 2 == 0 && x % 7==0) console.log(x);
  }
}

getEven(20);
getEvenV2(20);

