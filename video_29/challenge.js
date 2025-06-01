// let bill = 275;
// let fifteenPercentTip = bill * (15 / 100);
// let twentyPercentTip = bill * (20 / 100);
// console.log(
//   `the bill was ${bill}, the tip was ${
//     bill >= 50 && bill <= 300 ? fifteenPercentTip : twentyPercentTip
//   }, and the total value ${
//     (bill >= 50) & (bill <= 300)
//       ? bill + fifteenPercentTip
//       : bill + twentyPercentTip
//   }`
// );
// another way of doing this
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(
  `the bill was ${bill}, and the tip was ${tip} and the total value ${
    bill + tip
  }`
);
