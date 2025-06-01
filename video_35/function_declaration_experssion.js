// function declaration
// you can call function declaration before you declare it
const myAge = calcAge1(1999);
console.log(myAge); // 38
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// const myAge2 = calcAge2(1999); // you can't do that for function expression
// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const myAge2 = calcAge2(1999);
console.log(myAge2); // 38
