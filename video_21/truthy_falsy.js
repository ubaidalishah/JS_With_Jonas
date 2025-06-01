// in javascript there are 5 falsy values
// 0,'',undefined,null,NaN
// by default they are not flase but when converted to boolean then it becomes false
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean("")); // false
// in practice we don't convert it, it is done implicitly i mean type coercion is done
const money = 0;
if (money) {
  // it will be converted to boolean and 0 is falsy value
  console.log("dont spend it all");
} else {
  console.log("you should find a job");
}
let height; // undefined
if (height) {
  console.log("you got good height");
} else {
  console.log("the height is undefined");
}

