// 1) Ecrire une fonction qui retourne la plus grande valeur parmi les trois nombres fournis en paramètre.
function getMax(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

function getMaxV2(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
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
    if (x % 2 == 0) console.log(x);
  }
}

function getEvenMul7(n) {
  for (let x=0; x <= n; x++){
    if (x % 2 == 0 && x % 7==0) console.log(x);
  }
}

getEven(20);
getEvenV2(20);

// le nombre de piles et de faces obtenus sur un lancé de n pièces de monnaies simulées par l'utilisation du générateur de nombre aléatoire.

function rollNTimes(min, max, times) {
  // TODO manage input error
  const rolls = [];
  for (let i = 0; i<times; i++) {
    rolls.push(getRandomInt(min, max));
  }
  return rolls;
}

function count(n, values){
  let count = 0;
  for (const v of values) {
    if (v === n) count++;
  }
  return count;
}

const TAIL = 0;
const FACE = 1;

function getNbTailsAndFaces(times) {
  const rolls = rollNTimes(TAIL, FACE, times);
  const nbTails = count(TAIL, rolls);
  const nbFaces = count(FACE, rolls);
  // const nbFaces = rolls.length - nbTails;
  return {
    tails: nbTails,
    face: nbFaces,
  }
}

console.log(getNbTailsAndFaces(10000000));
function isPrime(n) {
    if (isNaN(n) || !Number.isInteger(n)) throw 'Not an integer';
    if (n > Number.MAX_SAFE_INTEGER) throw 'Number too big';
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    if (n == 3) return true;
    if (n % 3 == 0) return false;
    // On pourrait continuer avec le crible d'Ératosthène pour les multiples de 5, 7, 11, ...
    // mais cela rendrait la programmation de la boucle suivante très complexe
    // et il faudrait donc repenser la totalité de l'algorithme.
    let step = 2;
    let div = 5;
    while (div * div <= n && n % div != 0) {
        div += step;
        // Pas alterné (+2 +4 +2 +4 ...) pour ne pas parcourir les multiples de 2 ni de 3
        step = (step + 1) % 4 + 1;
    }
    // Si aucun diviseur n'a été trouvé avant la racine du nb, c'est un nombre premier
    return div * div > n;
}

console.log("0 is prime : " + isPrime(0));
console.log("1 is prime : " + isPrime(1));
console.log("2 is prime : " + isPrime(2));
console.log("26 is prime : " + isPrime(26));
console.log("87178291197 is prime : " + isPrime(87178291197));
console.log("87178291199 is prime : " + isPrime(87178291199));

// 7) Ecrire une fonction nommée cl qui affiche dans la console, ligne après ligne, toutes les données fournies en paramètre. Exemple d'appel:
function cl(...args) { // ... rest operator => mettre dans un tableau tous les paramètres restants
  for (const v of args) {
    console.log(v);
  }
  /*
    for (let i=0;: i<args.length; i++) {
      const v = args[i];
      console.log(v);
    }
  */
}

cl(1, 2 ,"a", [3.1, 4, 159]);

function double(n) {
  return n * 2;
}

function square(n) {
  return n ** 2; // ou n * n
}

function transform(n, fct) {
  return fct(n);
}

console.log(transform(5, double));
console.log(double(5));