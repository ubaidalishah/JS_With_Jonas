// type conversion
// string to number
let input = "109";
let output = Number(input);
console.log(output); // 109
console.log(input); // '109'
// when you try to convert a string to number and it is not converted js give us NaN means not a number
// but did you know that the type of NaN is number so we can say that it give us a number which is not valid
console.log(Number("ubaid")); // NaN

