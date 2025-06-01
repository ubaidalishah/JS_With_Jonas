function logger() {
  console.log("my name is ubaid");
}
// calling / running / invoking function
logger();
function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangesJuice = fruitProcessor(2, 3);
console.log(appleOrangesJuice);
