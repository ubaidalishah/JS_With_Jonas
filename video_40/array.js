const friends = ["ubaid", "ali", "shah"];
console.log(friends);
const years = new Array(1991, 1992, 2000, 2007);
console.log(years);
console.log(friends[0]); // ubaid
console.log(years[2]); // 2000
console.log(friends.length); // total elements of array
console.log(friends[friends.length - 1]); // friends.length - 1 = 2
friends[friends.length - 1] = "Bacha";
console.log(friends);
// primitive datatypes const value does not change but array is non primitive datatype so we can change the values in it,so we can mutate the array, and here we can't change the whole array like friends = ['ubaid','bacha]
const calAge = function (birthYear) {
  return 2025 - birthYear;
};
const birthYears = [1999, 2000, 2008, 2010];
const age1 = calAge(birthYears[0]);
const age2 = calAge(birthYears[2]);
const age3 = calAge(birthYears[birthYears.length - 1]);
console.log(age1, age2, age3);
const ages = [calAge(birthYears[0]),calAge(birthYears[2]),calAge(birthYears[birthYears.length - 1])]
console.log(ages)
