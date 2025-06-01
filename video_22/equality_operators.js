const PromptSync = require("prompt-sync");

const age = 18;
if (age === 18) console.log("you just became an adult");
// === strict equality operators does not do type coercion
// == do type coercion
console.log("18" === 18); // false due to not type coercion
console.log("18" == 18); // true due to type coercion

// avoid the loose equality operator as much as possible to avoid confusions
prompt = PromptSync();
const favorite = prompt("what's your favorite number: ");
// prompt takes value in string so your number will be in string format
console.log(favorite);
if (favorite == 24) {
  console.log("your number is 24");
  console.log(typeof favorite); // string
}
// we can change the type of prompt input
const anotherFavoriteNumber = Number(prompt("Enter Your Number: "));
if (anotherFavoriteNumber === 23) {
  console.log(`your number is ${anotherFavoriteNumber}`);
  console.log(typeof anotherFavoriteNumber); // number
} else if (anotherFavoriteNumber !== 23) {
  console.log("why not 23");
}
