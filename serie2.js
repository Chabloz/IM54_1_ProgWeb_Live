const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);


console.log(strings);
console.log(...strings);

// a tester si il y a une autre méthode simple
const stringsWithLorem = ["lorem", ...strings]; // ...string make a shallow copy of the strings array

