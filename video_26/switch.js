// it do strict check
const day = "saturday";
switch (day) {
  case "monday":
    console.log("Monday");
    break;
  case "tuesday":
    console.log("Tuesday");
    break;
  case "wednesday":
    console.log("Wednesday");
    break;
  case "Thursday":
    console.log("Thursday");
    break;
  case "friday":
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  default:
    console.log("none day");
}
// to do the above using if else
if (day === "monday") {
  console.log("Monday");
} else if (day === "tuesday") {
  console.log("Tuesday");
} else if (day === "wednesday") {
  console.log("Wednesday");
} else if (day === "thursday") {
  console.log("Thursday");
} else if (day === "friday" || day === "saturday" || day === "sunday") {
  console.log("Weekend");
} else {
  console.log("none day");
}
