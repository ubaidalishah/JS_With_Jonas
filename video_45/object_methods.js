// const ubaid = {
//   firstName: "Ubaid",
//   birthYear: 2000,
//   lastName: "Shah",
//   job: "Unemployed",
//   friends: ["sallo", "azam", "hasho"],
//   calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   },
// };
// console.log(ubaid.calcAge(2000));
// console.log(ubaid["calcAge"](2000));

// const ubaid = {
//   firstName: "Ubaid",
//   birthYear: 2000,
//   lastName: "Shah",
//   job: "Unemployed",
//   friends: ["sallo", "azam", "hasho"],
//   calcAge: function () {
//     return 2025 - this.birthYear;
//   },
// };
// console.log(ubaid.calcAge());

const ubaid = {
  firstName: "Ubaid",
  birthYear: 2000,
  lastName: "Shah",
  job: "Unemployed",
  friends: ["sallo", "azam", "hasho"],
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.age} years old and he is ${this.job}`;
  },
};
console.log(ubaid.calcAge());
//25
console.log(ubaid.age);
//25
console.log(ubaid.getSummary());
// Ubaid is 25 years old and he is Unemployed
