const age = 18;
age >= 18 ? console.log("adult") : console.log("not adult");
// so the ternary operator is an expression which means it can produces a value
const drink = age>=18 ? 'wine' : 'water'
console.log(drink) // wine
// doing the above through if else
let drink2;
if(age>=18){
    drink2 = 'wine'
}
else{
    drink2 = 'water'
}
console.log(drink2)
console.log(`I like to drink ${age>=18 ? 'wine':'water'}`)