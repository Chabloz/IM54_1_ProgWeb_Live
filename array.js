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
console.log(doubleValues);

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