let hasDriverLicense = true;
let hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision); // true
hasDriverLicense = true;
hasGoodVision = false;
console.log(hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision); // true
hasDriverLicense = true;
hasGoodVision = true;
const shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
  console.log("sarah is a driver");
} else {
  console.log("sarah could not drive");
}
let isTired = true;
if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("sara could drive");
} else {
  console.log("someone else should drive");
}
isTired = false;
if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("sarah could drive");
} else {
  console.log("some else should drive");
}
