// arrow function
const calAge = (birthYear) => 2037 - birthYear;
const age = calAge(1999);
console.log(age);

const retirement = (birthYear,firstName) => {
    const age = 2025 - birthYear
    const retirementYear = (65 - age) + 2025
    return `${firstName}, will be retire in ${retirementYear}`
}
const retirementYear = retirement(2000,'Ubaid')
console.log(retirementYear)