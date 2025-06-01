prompt = require("prompt-sync")();

const ubaid = {
  firstName: "Ubaid",
  lastName: "Shah",
  job: "Unemployed",
  friends: ["sallo", "azam", "hasho"],
};
console.log(ubaid);
console.log(ubaid.firstName); // ubaid
const nameKey = "Name";
console.log(ubaid["first" + nameKey]); //ubaid
console.log(ubaid["last" + nameKey]); // shah

// let interestedIn = prompt(
//   "tell me what do you want to know about ubaid, firstName,lastName,job,friends: "
// );
// if (ubaid[interestedIn]) {
//   console.log(ubaid[interestedIn]);
// } else {
//   console.log("no such type of property exist");
// }
ubaid["location"] = "Pakistan";
console.log(ubaid);
console.log(
  `${ubaid.firstName} has ${ubaid.friends.length} friends, and his best friend is called ${ubaid.friends[0]}`
);
