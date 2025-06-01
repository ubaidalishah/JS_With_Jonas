//basic array methods

const array_1 = ["ubaid", "ali", "shah"];

let newLength = array_1.push("bacha");
console.log(array_1);
console.log(newLength); // 4

newLength = array_1.unshift("syed");
console.log(array_1);
console.log(newLength); // 5

let poppedElement = array_1.pop();
console.log(array_1);
console.log(poppedElement); // bacha

poppedElement = array_1.shift();
console.log(array_1);
console.log(poppedElement); // syed
